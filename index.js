//==============================================================================
// ■ Index (index.js)
//------------------------------------------------------------------------------
//     Application main entry point.
//==============================================================================
require("./constants");
const { getOptions } = require("./args");
const { executeMany } = require("./actions");

const options = getOptions();
if (options.length) {
  executeMany(options);
}
else
{
  console.log("No options provided.");
}
