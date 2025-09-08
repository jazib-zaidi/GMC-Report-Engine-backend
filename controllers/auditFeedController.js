// npm i json2csv
const fs = require('fs');
const path = require('path');
const { Parser } = require('json2csv');

const fetch = require('node-fetch');
const { XMLParser } = require('fast-xml-parser');
const { formatNumber } = require('../utils/loadTaxonomyMap');

const website = require('../websites.json');

async function fetchAndParse(XML_URL, fetchAll) {
  try {
    const res = await fetch(XML_URL);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const xmlData = await res.text();

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '',
    });

    const jsonObj = parser.parse(xmlData);
    const items = jsonObj.rss?.channel?.item || [];

    const match = XML_URL.match(/f\.feedops\.com\/([^_]+)/);
    const domain = match ? match[1] : null;
    console.log(domain);

    const websiteInfo = website.filter((site) => site.website_name === domain);
    console.log(websiteInfo);

    const productTypes = new Set();
    const titlesUnder40Chars = [];
    const descriptionUnder500Chars = [];
    const titleLargerThan150Chars = [];

    let inStockProducts = 0;
    items.forEach((item) => {
      // guard for missing product_type or short paths
      const pt = item['g:product_type'];
      if (pt && typeof pt === 'string' && pt.includes('>')) {
        const parts = pt.split('>');
        if (parts[2]) productTypes.add(parts[2].trim());
      }
      const titleLen = item.title?.length || 0;

      inStockProducts += item['g:availability'] === 'in stock' ? 1 : 0;

      if ((item.description?.length || 0) <= 100) {
        descriptionUnder500Chars.push({
          id: item['g:id'],
          description: item.description || '',
          length: item.description ? item.description.length : 0,
          imgUrl: item['g:image_link'],
          stock: item['g:availability'],
        });
      }

      if (titleLen > 150) {
        titleLargerThan150Chars.push({
          id: item['g:id'],
          title: item.title,
          length: titleLen,
          imgUrl: item['g:image_link'],
          stock: item['g:availability'],
        });
      }

      if (titleLen <= 35) {
        titlesUnder40Chars.push({
          id: item['g:id'],
          title: item.title,
          length: titleLen,
          imgUrl: item['g:image_link'],
          stock: item['g:availability'],
        });
      }
    });

    const sortedAsc = titlesUnder40Chars.sort((a, b) => a.length - b.length);
    const sortedDesc = titleLargerThan150Chars.sort(
      (a, b) => b.length - a.length
    );
    const sortedDescription = descriptionUnder500Chars.sort(
      (a, b) => a.length - b.length
    );

    return {
      domain,
      totalProducts: formatNumber(items.length),
      inStockProducts: formatNumber(inStockProducts),

      titlesUnder40Chars: sortedAsc.slice(0, fetchAll ? undefined : 35),
      totalTitlesUnder40Chars: formatNumber(sortedAsc.length),

      descriptionUnder500Chars: sortedDescription.slice(
        0,
        fetchAll ? undefined : 35
      ),
      totalDescriptionsUnder500Chars: formatNumber(sortedDescription.length),

      titleLargerThan150Chars: sortedDesc.slice(0, fetchAll ? undefined : 35),
      totalTitlesLargerThan150Chars: formatNumber(sortedDesc.length),

      websiteInfo,
    };
  } catch (err) {
    console.error('Error fetching or parsing XML:', err);
    throw err;
  }
}

/**
 * Save the audit result into a single CSV file.
 * The CSV will include:
 * - One "summary" row with totals
 * - All items from each list, tagged via `bucket`
 */
async function saveAuditCsv(
  result,
  outDir = path.join(process.cwd(), 'audits')
) {
  if (!result) throw new Error('No audit result to save.');

  const {
    domain,
    totalProducts,
    inStockProducts,
    totalTitlesUnder40Chars,
    totalDescriptionsUnder500Chars,
    totalTitlesLargerThan150Chars,
    titlesUnder40Chars = [],
    descriptionUnder500Chars = [],
    titleLargerThan150Chars = [],
    websiteInfo = [],
  } = result;

  // Ensure output directory exists
  fs.mkdirSync(outDir, { recursive: true });

  const rows = [];

  // Summary row (empty ID/Title fields)
  rows.push({
    bucket: 'summary',
    id: '',
    title: '',
    description: '',
    length: '',
    imgUrl: '',
    stock: '',
    domain: domain || '',
    totalProducts,
    inStockProducts,
    totalTitlesUnder40Chars,
    totalDescriptionsUnder500Chars,
    totalTitlesLargerThan150Chars,
    websiteInfo: JSON.stringify(websiteInfo),
  });

  // Helper to normalize each bucket
  const pushBucket = (bucketName, arr) => {
    arr.forEach((x) => {
      rows.push({
        bucket: bucketName,
        id: x.id || '',
        title: x.title || '',
        description: x.description || '',
        length: typeof x.length === 'number' ? x.length : '',
        imgUrl: x.imgUrl || '',
        stock: x.stock || '',
        domain: domain || '',
        totalProducts: '',
        inStockProducts: '',
        totalTitlesUnder40Chars: '',
        totalDescriptionsUnder500Chars: '',
        totalTitlesLargerThan150Chars: '',
        websiteInfo: '',
      });
    });
  };

  pushBucket('titlesUnder40Chars', titlesUnder40Chars);
  pushBucket('descriptionUnder500Chars', descriptionUnder500Chars);
  pushBucket('titleLargerThan150Chars', titleLargerThan150Chars);

  const fields = [
    'bucket',
    'id',
    'title',
    'description',
    'length',
    'imgUrl',
    'stock',
    'domain',
    'totalProducts',
    'inStockProducts',
    'totalTitlesUnder40Chars',
    'totalDescriptionsUnder500Chars',
    'totalTitlesLargerThan150Chars',
    'websiteInfo',
  ];

  const parser = new Parser({ fields, withBOM: true });
  const csv = parser.parse(rows);

  const filename = `audit_${domain || 'feed'}.csv`;
  const filePath = path.join(outDir, filename);
  fs.writeFileSync(filePath, csv, 'utf8');

  return filePath;
}

exports.auditFeedController = async (req, res) => {
  try {
    const { url, fetchAll = false } = req.body;

    const result = await fetchAndParse(url, fetchAll);

    // Save CSV
    // const csvPath = await saveAuditCsv(result);

    // Respond with both the JSON and where we saved the CSV
    return res.json({
      message: 'Audit feed data',
      csvPath: null,
      data: result,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: 'Failed to audit feed', error: err.message });
  }
};
