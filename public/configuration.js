/* eslint-disable no-magic-numbers */
let config = {};

var request = new XMLHttpRequest();

request.open('GET', './configuration.json', false);

request.send(null);

if (request.status === 200) {
	config = JSON.parse(request.responseText);
}

window.env = config;
