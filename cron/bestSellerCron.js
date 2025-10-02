const cron = require('node-cron');
const axios = require('axios');
const customers = require('./customers');

const JIRA_DOMAIN = process.env.JIRA_DOMAIN;
const JIRA_EMAIL = process.env.JIRA_EMAIL;
const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN;
const JIRA_PROJECT_KEY = process.env.JIRA_PROJECT_KEY;

const authHeader =
  'Basic ' + Buffer.from(`${JIRA_EMAIL}:${JIRA_API_TOKEN}`).toString('base64');

async function createJiraTicket(customerName, sheet_id) {
  const jiraRes = await axios.post(
    `https://${JIRA_DOMAIN}/rest/api/2/issue`,
    {
      fields: {
        project: { key: JIRA_PROJECT_KEY },
        summary: `[${customerName}] Top converting products - ${new Date().toISOString()}`,
        description: `Job ran successfully for ${customerName}. Here is the [link|https://docs.google.com/spreadsheets/d/${sheet_id}/edit#gid=0] to the. with custom label  `,
        issuetype: { name: 'Task' },
        parent: { key: 'DCA-15433' },
      },
    },
    {
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json',
      },
    }
  );
}

function buildUrl({ customer_id, limit, sheet_id }) {
  return `${process.env.BACKEND_URL}/api/best-seller-products?customer_id=${customer_id}&time_frame=90&limit=${limit}&token=${process.env.API_TOKEN}&sheet_id=${sheet_id}`;
}

function startBestSellerCron() {
  // run monthly on the 1st at midnight
  cron.schedule('0 0 1 * *', async () => {
    for (const customer of customers) {
      try {
        const url = buildUrl(customer);
        const response = await axios.get(url);

        await createJiraTicket(customer.name, customer.sheet_id);
      } catch (err) {
        console.error(`❌ Failed for ${customer.name}:`, err.message);
      }
    }
  });
}

module.exports = { startBestSellerCron };
