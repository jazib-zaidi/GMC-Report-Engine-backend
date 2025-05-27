const fs = require('fs');

const loadTaxonomyMap = () => {
  const lines = fs
    .readFileSync('taxonomy-with-ids.en-US.txt', 'utf-8')
    .split('\n');
  const map = {};
  for (const line of lines) {
    const [id, ...nameParts] = line.split(' - ');
    if (id && nameParts.length) {
      map[id.trim()] = nameParts.join(' - ').trim();
    }
  }
  return map;
};
module.exports = { loadTaxonomyMap };
