const Cart = require('../models/Cart');
const {verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization } = require('./verifyToken');
const router = require('express').Router();

// ADD TO CART //

router.post('/', verifyToken, async(req, res) => {
    const newCart = new Cart(req.body)
    try {
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    } catch (error) {
        res.status(500).json(error)
    }
});

// UPDATE PRODUCT //

router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const upatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {new:true});
        res.status(200).json(upatedCart);
    } catch (error){res.status(500).json(error)} {
    }
});

// DELETE CART //

router.delete('/:id', verifyTokenAndAuthorization, async(req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json('Product has been deleted')
    } catch (error) {
        res.status(500).json(error)
    }
});

//  GET USER CART //

router.get('/find/:userId', verifyTokenAndAuthorization, async(req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json(error);
    }
});

// // // GET ALL PRODUCTS //

// router.get('/', async(req, res) => {
//     const queryNew = req.query.new;
//     const queryCatergoy = req.query.category;
//     try {
//         let products;
//         if(queryNew){
//             products = await Product.find().sort({createdAt: -1}).limit(5);
//         } else if (queryCatergoy) {
//             products = await Product.find({categories:{
//                 $in:[queryCatergoy]
//             }
//         });
//     } else {
//         products = await Product.find();
//     }
//     res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

module.exports = router;