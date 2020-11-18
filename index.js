const fs = require('fs');
const express = require('express');

const app = express();

const data = JSON.parse(fs.readFileSync(`${__dirname}/Data/data.json`));

app.get('/api/v1/ascending', (req, res) => {
    const sorted_data = data.sort(function(a, b) {
        return a.Age - b.Age;
    });
    res.status(200).json({
        status: 'success',
        data: sorted_data
    })
});

app.get('/api/v1/sum', (req, res) => {
    const sum = data.map(data => data.Marks).reduce((acc, data) => data + acc);

    res.status(200).json({
        status: 'success',
        data: sum
    })
});

const port = 3000;

app.listen (port, () => {
    console.log(`running on ${port}`);
});