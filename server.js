import express from 'express';
const port = process.env.port||8080;
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/',(req,res) => {
    res.render('index');
});

app.listen(port,() => {
    console.log(`Application running on port: ${port}`);
});