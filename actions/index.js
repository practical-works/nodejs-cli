//==============================================================================
// ■ Actions (actions.js)
//------------------------------------------------------------------------------
//     Functions associated with options extracted from flags.
//==============================================================================
const methods = require("./@methods");
const aliases = require("./@aliases");

//------------------------------------------------------------------------------
// ● Get-Method
//------------------------------------------------------------------------------
function getMethod(option) {
  if (option.type === "long" && methods.hasOwnProperty(option.key)) {
    return methods[option.key];
  } else if (option.type === "short") {
    for (const key in aliases) {
      if (aliases[key].includes(option.key) && methods.hasOwnProperty(key)) {
        return methods[key];
      }
    }
  }
}

//------------------------------------------------------------------------------
// ● Get-Aliases
//------------------------------------------------------------------------------
function getAliases(option) {
  if (option.type === "long" && aliases.hasOwnProperty(option.key)) {
    return aliases[option.key];
  } else if (option.type === "short") {
    for (const key in aliases) {
      if (aliases[key].includes(option.key)) {
        return [ key, ...aliases[key].filter(alias => alias !== option.key) ];
      }
    }
  }
}

//------------------------------------------------------------------------------
// ● Execute
//------------------------------------------------------------------------------
// Option-Object: { key: String, value: String, type: "long"|"short" }
function execute(option) {
  if (option) {
    const method = getMethod(option);
    if (method) {
      method(option.value);
    } else {
      console.log(ERR_BAD_OPTION(option));
    }
  }
}
function executeMany(options) {
  if (options.length) {
    const badOptions = options.filter((opt) => !getMethod(opt));
    if (badOptions.length) {
      for (const opt of badOptions) {
        console.log(ERR_BAD_OPTION(opt));
      }
    } else {
      const executedAliases = [];
      for (const opt of options) {
        if (!executedAliases.find((alias) => alias === opt.key)) {
          execute(opt);
          executedAliases.push(opt.key);
          executedAliases.push(...getAliases(opt));
        }
      }
    }
  }
}

//------------------------------------------------------------------------------
// ► Exports
//------------------------------------------------------------------------------
module.exports = { methods, aliases, execute, executeMany };
