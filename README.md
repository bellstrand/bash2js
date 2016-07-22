# bash2js

[![Build Status](https://travis-ci.org/bellstrand/bash2js.svg?branch=master)](https://travis-ci.org/bellstrand/bash2js)
[![npm Version](https://img.shields.io/npm/v/bash2js.svg)](https://www.npmjs.com/package/bash2js)

bash2js convert bash output to JavaScript Arrays/Objects and lets you use JavaScript functions on it

## Installation
```bash
# required NodeJS to work https://nodejs.org/
npm install -g bash2js
```

## How to use
```bash
command | bash2js # converts output from "command" to an array/object and prints it
command | bash2js "map(col => col[0])" # converts output from "command", loops through it and prints column of index 0 from each line (expects output to be an array)
command | bash2js test # converts output from "command", prints property with key "test" (expects output to be an object)
command | bash2js "[0]" # converts output from "command", prints first index in the array (expects output to be an array)
command | bash2js > test.json # converts output from "command", saved output to "test.json"
```

## Examples
```bash
ls -l # outputs
total 10
-rwxr-xr-x 1 user 1049089 1013 jul 22 11:18 index.js*
-rw-r--r-- 1 user 1049089 1074 jul 21 09:22 LICENSE
-rw-r--r-- 1 user 1049089  533 jul 22 11:20 package.json
-rw-r--r-- 1 user 1049089   74 jul 21 09:23 README.md

ls -l | bash2js # converts ls -l to an array and prints it
[
    [ "total",  10 ],
    [ "-rwxr-xr-x", 1, "user", 1049089, 1013, "jul", 22, "11:18", "index.js*" ],
    [ "-rw-r--r--", 1, "user", 1049089, 1074, "jul", 21, "09:22", "LICENSE" ],
    [ "-rw-r--r--", 1, "user", 1049089, 533, "jul", 22, "11:20", "package.json" ],
    [ "-rw-r--r--", 1, "user", 1049089, 74, "jul", 21, "09:23", "README.md" ]
]

ls -l | bash2js "map(col => col[8])" # converts ls -l to an array of arrays and prints the element at index 8 in each array
index.js*
LICENSE
package.json
README.md

cat package.json | bash2js repository # converts package.json to a object and prints the repository field
{
    "type": "git",
    "url": "git+https://github.com/bellstrand/bash2js.git"
}
```
