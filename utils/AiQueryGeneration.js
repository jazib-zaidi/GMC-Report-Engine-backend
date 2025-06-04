require('dotenv').config();
const OpenAI = require('openai');
const { productType, liaGoogleProductCategory } = require('./getCategory');
const {
  googleProductCategory,
} = require('../controllers/googleProductCategory');

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

const generateQuery = async (question) => {
  if (!question || typeof question !== 'string') {
    throw new Error('Invalid question. Please provide a non-empty string.');
  }

  const prompt = `

You are a data assistant trained to generate **Google Ads Query Language (GAQL) WHERE, ORDER BY, and LIMIT clauses** for queries made against the **Shopping Performance View** in Google Ads.

---

### ✅ Your role:

Transform a user’s question into:

* A valid GAQL **WHERE clause** (and optionally ORDER BY and LIMIT)
* That uses **only fields and formats that are GAQL-safe**
* **Do not include any arithmetic expressions** like \`/\`, \`*\`, \`+\`, or \`-\` in the GAQL output

---

### 🔍 Supported fields:

You can use these in GAQL:

segments.product_title,  
segments.product_store_id,  
segments.product_merchant_id,  
segments.product_item_id,  
segments.product_channel,  
segments.product_brand,  
segments.product_country,  
${productType},
${liaGoogleProductCategory},
metrics.clicks,  
metrics.conversions,  
metrics.cost_micros,  
metrics.conversions_value,  
metrics.impressions  

---
channel are in uppercase  = LOCAL,ONLINE
### 📐 Supported (but only in post-processing logic):

You can **recognize and support questions** about these **derived metrics**, but do not include the calculation in GAQL:

| Metric                   | Formula (for internal understanding only)       |
| ------------------------ | ---------------------------------------------- |
| CTR (Click-Through Rate) | metrics.clicks / metrics.impressions           |
| CPC (Cost Per Click)     | metrics.cost_micros / metrics.clicks           |
|ROAS (Return on Ads Spend) |  conversions_value / cost_micros | 

Instead, **approximate** using base metrics, or apply filtering that supports post-processing (e.g., require non-zero clicks and impressions).

---

### ⚠️ Constraints:

* ❌ Do **not** include arithmetic operators in GAQL
* ✅ Use raw fields , If user ask for Store like - What are the top-performing Store ? 
then add store in the query,
* If a user asks a question outside of this scope, respond with:
  * A short message saying it’s unsupported add invalid in the response,
  * A suggestion of a valid alternative they could ask
  * Always Include Limit the max limit is to 20

---

### ✉️ User Question:

${question}

---

### ✅ Example Outputs: below is just for reference, do not include in your response

#### Question:

"Which products have the highest CTR?"

**Output:**

WHERE metrics.impressions > 0 AND metrics.clicks > 0  
ORDER BY metrics.clicks DESC  
LIMIT 10  

*Note: Calculate CTR in your app as clicks / impressions.*

---

#### Question:

"Show products with CPC greater than \$2"

**Output:**

WHERE metrics.clicks > 0  

*Note: After fetching data, calculate cost_micros / clicks in the app and filter CPC > 2 (2,000,000 micros).*

---

#### Question:

"Which campaign had the highest ROAS last week?"

**Output:**

> Sorry, I can’t filter by ROAS or by time ranges yet.  
> Try asking something like: **"Which products had the highest conversions?"**
Note: Don't include question in the output, just the GAQL query. No explanation just the query I will use this responce to fetch data from google ads. dont include *Note: at the end.
`;

  const res = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
  });

  return res.choices[0].message.content;
};
// AI optimization batch -> record
const aiDescription = async (question, data, totalproduct) => {
  const prompt = `
You are a product analyst. Based on the question and data provided below, write a very short summary to be displayed above a table in an HTML document.

✅ Instructions:
Use proper HTML formatting:

Wrap all text in a <p> tag unless listing items.

Use <strong> or <b> to highlight key insights.

Use <ul> and <li> if presenting multiple bullet points.

Be concise and factual.

Formate all the number to be fixed .00 Only

For cost calculate is like - row.metrics?.cost_micros / 1_000_000)

Do not add extra context, assumptions, or embellishments.

Focus only on answering the specific question

Question: ${question}  
Data: ${JSON.stringify(data)}  
Total Product Count: ${totalproduct}

At the end of your response, include Please note that this is only one of the "formate this number"${totalproduct} total products. The full report, once exported, will include all products. following are the sample of 10 product please click Yes if you Want to save this in the report?



.

`;

  const res = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
  });

  return res.choices?.[0]?.message?.content || '';
};

module.exports = {
  generateQuery,
  aiDescription,
};
