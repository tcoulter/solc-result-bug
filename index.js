#!/usr/bin/env node
var solc = require("solc");
var fs = require("fs");

var source = fs.readFileSync("./mvb.sol", "utf8");

var result = solc.compile(source, 1);
