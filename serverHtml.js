var http = require('http');
var fs = require('fs');

http.createServer(async (request, response) => {
	if (request.url != '/favicon.ico') {
		let data;
		let type;
		
		if (request.url === '/page.html') {
			data = await fs.promises.readFile('page.html', 'utf8');
			type = 'text/html';
		}
		
		if (request.url === '/image.png') {
			data = await fs.promises.readFile('image.png');
			type = 'image/png'; // правильно укажем mime-тип
		}

        if (request.url === '/styles.css') {
			data = await fs.promises.readFile('styles.html', 'utf8');
			type = 'text/html';
		}
		
		response.writeHead(200, {'Content-Type': type});
		response.write(data);
		response.end();
	}
}).listen(3000);