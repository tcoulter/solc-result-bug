#!/usr/bin/env node
var solc = require("solc");
var fs = require("fs");

var source = fs.readFileSync("./strings.sol", "utf8");

var result = solc.compile(source, 1);

console.log(result);
console.log(typeof result);
