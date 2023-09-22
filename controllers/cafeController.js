// passes database datas
const usrAuther = require('../models/cafe-usr-info');
const menuList = require('../models/cafe-order-menu');

const cafe_home = (req, res) =>{
    res.render('home', {title: 'home'});
}
const cafe_features = (req, res) =>{
    res.render('features', {title: 'features'});
}
const cafe_order_get = (req, res) =>{
    menuList.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('order', {title: 'Order Menu', menus: result});
    })
    .catch((err)=>{
        console.log(err)
    })
}
const cafe_log_get = (req, res) =>{
    res.render('log-in', {title: 'log-in'});
}
const cafe_log_post = (req, res) =>{
    const id = req.params.id;
    const dataCompare = {
        username: req.body.username,
        password: req.body.password
    }
    usrAuther.exists({username: dataCompare.username, password: dataCompare.password})
    .then((result)=>{
        if(result == null){
            console.log('There are no user/password for this one!')
        }
        else{
            usrAuther.findById(result)
            .then((result)=>{
                console.log(result);
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    })
    .catch((err)=>{
        console.log(err)
    });
}
const cafe_register_get = (req, res) =>{
    res.render('register', {title: 'register'});
}
const cafe_register_post = (req, res) =>{
    const usr = new usrAuther(req.body);
    const dataCompare = {
        username: req.body.username
    }
    usrAuther.exists({username: dataCompare.username})
    .then((result)=>{
        if(result == null){
            usr.save()
            .then((result)=>{
                res.redirect('/cafe/log-in');
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        else{
            console.log('There is an existing data! :)')
        }
    })
    .catch((err)=>{
        console.log(err)
    })
};



// exports this controller's objects
module.exports = {
    cafe_home,
    cafe_features,
    cafe_order_get,
    cafe_log_get,
    cafe_log_post,
    cafe_register_get,
    cafe_register_post
    }