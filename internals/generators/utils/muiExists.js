/**
 * muiExists
 *
 * Check whether the given mui exist in either the mui directory
 */

const fs = require('fs');
const path = require('path');
const pageMUIs = fs.readdirSync(
  path.join(__dirname, '../../../app/mui'),
);
const muis = pageMUIs;

function muiExists(comp) {
  return muis.indexOf(comp) >= 0;
}

module.exports = muiExists;
