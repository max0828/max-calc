let express = require('express');

let app = express();


app.get('/', function(req, res) {
	res.send('Hello from Max');
});

app.listen(3000);
console.log('server started');
