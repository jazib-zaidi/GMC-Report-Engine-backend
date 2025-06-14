require('dotenv').config();
const OpenAI = require('openai');

function buildPrompt(row, country) {
  return `
You are Keyword Researcher GPT. Your primary function is to analyze structured product data and generate the most relevant Focus Keyword that aligns with how a typical buyer in **${country}** would search for that product online.

Special Instructions (if Apparel or Clothing):
If the product falls under apparel or fashion, make sure the keyword includes:

Gender

Size

Style

Cut

Pattern or Print

Material

Colour

Closure/Features

These elements must reflect real buyer search behavior—think like someone typing a very specific search to find exactly what they want.

Output:
Return only the Focus Keyword, written as a natural phrase someone would type into Google when looking to buy that exact product.



Important Rules:
Do not create a focused keyword phrase that already appears in the current title as an exact match.
Do not add descriptive words or phrases to the focused keyword that are not already in the input data.
All Focus Keywords must be in Title Case.
Make sure Keywords remail short,
Keywords must be search-friendly, specific, and reflect actual user search behavior in **${country}**.
Avoid generic or overly broad keywords.
Do not include any country or location terms in the keyword.

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

Return only the most relevant Focus Keyword in Title Case. No explanation and make sure no country is included in keyword.
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

    const headers = [
      'Item ID',
      'Title',
      'Description',
      'Product Type (1st Level)',
      'Product Type (2nd Level)',
      'Product Type (3rd Level)',
      'Product Type (4th Level)',
      'Product Type (5th Level)',
      'Focus Keyword',
    ];

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
