const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3000;

// app.use(express.static('public'));

app.use(express.static(path.join(process.cwd(), "public")));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/cssjs', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/jquery',express.static(__dirname + '/node_modules/jquery/dist'));

app.set('view engine','hbs')

app.engine(
    'hbs',    
    exphbs.engine({
        extname: '.hbs',   
        layoutsDir:__dirname + '/views',
        partialsDir:__dirname + '/views/componentes',
    })
);

app.get('/',(req,res)=>{
    res.render('Dashboard',{
        layout:'Dashboard',
        ArrayProductos:[
            'banana','cebollas',
            'lechuga', 'papas',
            'pimenton', 'tomate'
        ],
        primerIngreso:true,
    })
});

app.listen(PORT,()=>{
    console.log(`Holiwis en Puerto: ${PORT} 👾`)
});