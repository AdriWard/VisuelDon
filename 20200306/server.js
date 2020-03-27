const express = require('express');

const app = express();

const port = 3000;

app.get('/port',(req,res) => {

    res.status(200).json({message: 'salut'})
})

app.listen(port, () => console.log(`listening on ${port}`));