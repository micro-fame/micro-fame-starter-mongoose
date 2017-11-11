const path = require('path');
const fs = require('mz/fs');
const { Utils: { fs: { isDirExists } } } = require('micro-fame');

module.exports = async function (app) {
  const loadDir = path.resolve(__dirname, '../', 'models');
  if (await isDirExists(loadDir)) {
    const files = await fs.readdir(loadDir);
    for (const p of files) {
      require(path.resolve(loadDir, p));
    }
  }
};
