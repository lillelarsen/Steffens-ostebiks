const Product = require('../models/Product');

exports.getAllProducts = async function(req,res,next) {
    try {
        let antal = parseInt(req.query.antal) || 10;
        const products = await Product.find().limit(antal);
        res.render('product-list', {'products':products});
    } catch (error) {
        console.error(error);
        res.send("Noget gik galt");
    }
}

exports.getOneProduct = async function(req,res,next) {
    try {
        const product = await Product.findById(req.params.id);
        res.render('edit-product', {'product':product});
    } catch (error) {
        console.error(error);
        res.send("Noget gik galt");
    }
}

exports.editOneProduct = async function(req,res,next) {
    try {
        const result = await Product.findByIdAndUpdate(req.params.id,{
            $set: {
                name: req.fields.name,
                description: req.fields.description,
                price: req.fields.price
            }
    });
    req.session.flash = {
        type: "info",
        message: "Dit produkt er blevet opdateret"
    };
        res.redirect('/produkter/rediger/' + req.params.id);
    } catch (error) {
        console.error(error);
        req.session.flash = {
            type: "error",
            message: "Dit produkt er IKKE blevet opdateret"
        };
        res.redirect('/produkter/rediger/' + req.params.id);
    }
}

exports.deleteOneProduct = async function(req,res,next) {
    try {
        const result = await Product.findByIdAndRemove(req.params.id);
        req.session.flash = {
            type: "success",
            message: "Dit produkt er blevet slettet"
        };
        res.redirect('/produkter');
    } catch (error) {
        console.error(error);
        req.session.flash = {
            type: "error",
            message: "Dit produkt er IKKE blevet slettet"
        };
        res.redirect('/produkter');
    }
}

