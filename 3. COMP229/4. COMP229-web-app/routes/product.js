const { response } = require('express');
const e = require('express');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to model
let Product = require('../models/product');

//Manage routes
router.get('/', (request, response, next) => {
    Product.find((err, productList) => {
        if (err) {
            return console.error(err);
        } else {
            //console.log(productList);
            response.render('product/list', { title: 'Product Info', ProductList: productList });
        }
    });
});

//To open add product page
router.get('/add', (request, response, next) => {
    response.render('product/add', { title: 'Add Product' })
});

router.post('/add', (request, response, next) => {
    //Getting data from form
    let newProduct = Product({
        "name": request.body.pname,
        "company": request.body.pcompany,
        "price": request.body.price
    })

    //Insert data into MongoDB
    Product.create(newProduct, (err, Product) => {
        if (err) {
            console.log(err);
            response.end(err);
        }
        else {
            response.redirect('/products');
        }
    })
});

//Retrieve data from MongoDB and open it in view (FORM)
router.get('/edit/:id', (request, response, next) => {

    let id = request.params.id;
    
    Product.findById(id, (err, productToEdit) => {
        if (err) {
            console.log(err);
            response.end(err);
        }
        else{
            response.render('product/edit', {title: 'Edit Product', product: productToEdit});
        }
    })
});

//Write code to store updated data into MongoDB
router.post('/edit/:id', (request, response, next) => {
    let id = request.params.id;

    let updateProduct = Product({
        "_id": id,
        "name": request.body.pname,
        "company": request.body.pcompany,
        "price": request.body.price
    });

    Product.updateOne({_id: id}, updateProduct, (err) => {
        if (err){
            console.log(err);
            response.end(err);
        }
        else{
            response.redirect('/products')
        }
    });
});


router.get('/delete/:id', (request, response, next) => {

    let id = request.params.id;
    
    Product.remove({_id: id}, (err) => {
        if (err) {
            console.log(err);
            response.end(err);
        }
        else{
            response.redirect('/products')
        }
    });
});

module.exports = router;