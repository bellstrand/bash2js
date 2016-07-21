#!/usr/bin/env node

let stdin = process.openStdin();
let arg = process.argv[2];

let data = '';

stdin.on('data', chunk => {
	data += chunk;
});

stdin.on('end', () => {
	let lines = convertToJSON(data) || data.split('\n').filter(line => line).map(line => {
		return convertToJSON(line) || line.split(' ').filter(word => word).map(word => {
			return convertToJSON(word) || word;
		});
	});

	//console.log('data' + process.argv[2]);
	if(arg) {
		let result = eval('lines' + (arg.substr(0, 1) !== '.' ? '.' : '') + arg);
		if(result) {
			if(Array === result.constructor) {
				result.filter(item => item).forEach(item => {
					console.log(item);
				});
			} else {
				console.log(result);
			}
		}
	} else {
		console.log(lines);
	}
});

function convertToJSON(string) {
	let result;
	try {
		result = JSON.parse(string);
	} catch(error) {
		result = false;
	}
	return result;
}
