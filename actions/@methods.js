//------------------------------------------------------------------------------
// ● Methods
//------------------------------------------------------------------------------
module.exports = {
  help() {
    console.log("This is an example cli app with nodeJS.");
  },
  name(value) {
    if (value) {
      console.log(`Hello, ${value}! Welcome! :D`);
    } else {
      console.log("Hello! What is you name?");
    }
  },
};
