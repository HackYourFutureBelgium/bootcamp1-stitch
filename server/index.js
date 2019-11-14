const express = require ('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send("wuck findows");
})

app.listen(PORT, () => {
    console.log (`listening on port ${PORT}`);
});