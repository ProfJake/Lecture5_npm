var censory = require("censorify");

console.log(censory.getWord());
console.log(censory.censor("Some very sad bad mad text"));
censory.addWord("dad");
console.log(censory.getWord());
console.log(censory.censor("A very dad sad rad day"));
