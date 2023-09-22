const express = require('express');
const mongoose = require('mongoose');
const cafeRoutes = require('./routes/cafeRoutes');
const Menu = require('./models/cafe-order-menu');


// init express app
const app = express();

// connect to MongoDB
const dbURL = "mongodb+srv://projectdummyacc001:takenpassword00@cafeproj.mkfuog7.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURL)
    .then((result)=>{
        app.listen(3000);})
    .catch((err)=>{
        console.log(err);});

app.set('view engine', 'ejs');

// middlewares and public files(statics)
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));





app.get('/', (req, res) =>{
    res.redirect('/cafe/home');
});

app.get('/about', (req, res) =>{
    res.render('about', {title: 'about us'});
});

app.use('/cafe', cafeRoutes);

// sandbox

app.get('/cafe/add-menu', (req, res)=>{
    const menu = new Menu({
        name: 'KAFaine',
        category: ['spicy', 'bitter', 'sweet'],
        price: '150',
        description: 'Damn HOT and SHARP but Sweet!'
    });
    menu.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    });
});

app.use((req, res)=>{
    res.status(404).render('404', {title: '404'});
})

