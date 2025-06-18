require('dotenv').config();
const OpenAI = require('openai');

function buildPrompt(row, country) {
  return `You are Product Title Optimizer GPT. Your primary function is to analyze structured product data and generate the most relevant, high-converting **Product Title** that aligns with how a typical buyer in **${country}** would search for that product online.

Formatting Rules:
- Return only the optimized **Title**.
- Use **Title Case** (Capitalize First Letters).
- Title must be **appealing, search-friendly, and click-enticing**.
- Do not repeat words or phrases unnecessarily.
- Avoid generic terms or filler words.
- Do not include location or country names.
- if brand in the original title add this in the optimized title to .
- Focus on terms users actually type into search engines when looking to **buy**.
- Highlight **key differentiators** (e.g., material, features, compatibility, size, quantity, filing fixtures, closures ) if available.
- Include a relevant long-tail keyword that reflects specific buyer search behavior.
- Use how users naturally speak or search.
- ideally title length would be under 70 characters.
- Important Do not exceed title length more then 80 characters under any circumstances. and absolutely not more than 110 characters.

Goal:
To increase click-through rate and sales by creating a **compelling, relevant** product title that resonates with searchers.

Input:
Title: ${row['Title']}
Product Type (1st Level): ${row['Product Type (1st Level)'] || ''}
Product Type (2nd Level): ${row['Product Type (2nd Level)'] || ''}
Product Type (3rd Level): ${row['Product Type (3rd Level)'] || ''}
Product Type (4th Level): ${row['Product Type (4th Level)'] || ''}
Product Type (5th Level): ${row['Product Type (5th Level)'] || ''}
Google Product Category 1: ${row['Google Product Category 1'] || ''}
Google Product Category 2: ${row['Google Product Category 2'] || ''}
Google Product Category 3: ${row['Google Product Category 3'] || ''}
Google Product Category 4: ${row['Google Product Category 4'] || ''}
Google Product Category 5: ${row['Google Product Category 5'] || ''}
Description: ${row['Description']}

Return only the **final, optimized Product Title**  Not exceed title length more then 80 characters under any circumstances. in Title Case. No explanation. No country terms.
`;
}

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

async function generateKeywords(socket, rows, country) {
  const output = [];
  let i = 0;
  let totalPromptTokens = 0;
  let totalCompletionTokens = 0;
  let totalCost = 0;
  let totalTokens = 0;

  for (const row of rows) {
    const prompt = buildPrompt(row, country);

    i++;
    try {
      const res = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      });
      const promptTokens = res.usage.prompt_tokens;
      const completionTokens = res.usage.completion_tokens;
      const tokens = res.usage.total_tokens;

      totalPromptTokens += promptTokens;
      totalCompletionTokens += completionTokens;
      totalTokens += tokens;

      const promptCost = (promptTokens / 1000) * 0.03;
      const completionCost = (completionTokens / 1000) * 0.06;
      totalCost += promptCost + completionCost;
      let keyword = res.choices[0].message.content.trim();
      if (keyword.startsWith('"') && keyword.endsWith('"')) {
        keyword = keyword.slice(1, -1);
      }

      const result = {
        'Item ID': row['Item ID'],
        'Title': row['Title'],
        'Focus Keyword': keyword,
        'Product Type (1st Level)': row['Product Type (1st Level)'],
        'Product Type (2nd Level)': row['Product Type (2nd Level)'],
        'Product Type (3rd Level)': row['Product Type (3rd Level)'],
        'Product Type (4th Level)': row['Product Type (4th Level)'],
        'Product Type (5th Level)': row['Product Type (5th Level)'],
        'Google Product Category 1': row['Google Product Category 1'],
        'Google Product Category 2': row['Google Product Category 2'],
        'Google Product Category 3': row['Google Product Category 3'],
        'Google Product Category 4': row['Google Product Category 4'],
        'Google Product Category 5': row['Google Product Category 5'],
        'Description': row['Description'],
      };

      output.push(result);

      socket.emit('keywordGenerated', result);

      if (rows.length <= i) {
      }
    } catch (err) {
      socket.emit('error', `Failed: ${row.Title}`);
    }
  }

  socket.emit('promptTokens', {
    totalPromptTokens,
    totalCompletionTokens,
    totalTokens,
    totalCost: totalCost.toFixed(4),
    estimatedCredits: (totalTokens / 1000).toFixed(2),
  });

  return output;
}

async function writeDataToSheet(
  sheets,
  spreadsheetId,
  sheetName,
  data,
  socket
) {
  try {
    if (!data || !data.length) {
      throw new Error('No data to write');
    }

    const headers = ['Item ID', 'Title', 'Focus Keyword'];

    const rows = data.map((row) => headers.map((header) => row[header]));
    // console.log('from sheet', headers);
    const sheetData = [headers, ...rows];

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `${sheetName}!A1`,
      valueInputOption: 'RAW',
      resource: {
        values: sheetData,
      },
    });

    socket.emit('googleSheet', {
      message: 'Focus keywords sheet created successfully!',
      spreadsheetUrl: `https://docs.google.com/spreadsheets/d/${spreadsheetId}`,
    });
  } catch (error) {
    console.error('Error writing to sheet:', error);
    socket.emit('googleSheetError', { message: 'Error writing to sheet' });
  }
}

module.exports = { writeDataToSheet, generateKeywords };
