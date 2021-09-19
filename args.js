//==============================================================================
// ■ args (args.js)
//------------------------------------------------------------------------------
//     Arguments variables manipulation utilities.
//==============================================================================

//------------------------------------------------------------------------------
// ● Text-Flag-Check
//------------------------------------------------------------------------------
function isLongFlag(text) {
  return text.startsWith(LONG_PREFIX);
}
function isShortFlag(text) {
  return !isLongFlag(text) && text.startsWith(SHORT_PREFIX);
}
function isFlag(text) {
  return isLongFlag(text) || isShortFlag(text);
}

//------------------------------------------------------------------------------
// ● Flag-Value
//------------------------------------------------------------------------------
// returns {undefined} if flag is not provided.
// returns {null} if flag is provided without a value (example: --name).
// returns {String} if flag is provided with a value (example: --name ambratolm).
//------------------------------------------------------------------------------
function flagValue(text) {
  if (!isFlag(text)) {
    throw ERR_NOT_FLAG(text);
  }
  let index = process.argv.indexOf(text);
  if (index < 0) return undefined;
  const value = process.argv[index + 1];
  return value || null;
}

//------------------------------------------------------------------------------
// ● Get-Options
//------------------------------------------------------------------------------
function getOptions() {
  const options = [];
  for (const arg of process.argv) {
    if (isLongFlag(arg)) {
      options.push({
        key: arg.substring(LONG_PREFIX.length, arg.length),
        value: flagValue(arg),
        type: "long",
        flag: arg,
      });
    } else if (isShortFlag(arg)) {
      options.push({
        key: arg.substring(SHORT_PREFIX.length, arg.length),
        value: flagValue(arg),
        type: "short",
        flag: arg,
      });
    }
  }
  return options;
}

//------------------------------------------------------------------------------
// ► Exports
//------------------------------------------------------------------------------
module.exports = {
  isLongFlag,
  isShortFlag,
  isFlag,
  flagValue,
  getOptions
};
