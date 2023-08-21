//
//
// const express = require('express');
// const dotenv = require('dotenv');
// console.log(process.env.ZILLOW_API_KEY);
// dotenv.config();
//
// const app = express();
//
// app.get('/config', (req, res) => {
// 	res.json({
// 		zillowApiKey: process.env.ZILLOW_API_KEY,
// 		googleApiKey: process.env.GOOGLE_API_KEY
// 	});
// });
//
// app.use(express.static('public'));
//
// app.listen(3000, () => console.log('Server started on http://localhost:3000'));
// console.log(process.env.ZILLOW_API_KEY);