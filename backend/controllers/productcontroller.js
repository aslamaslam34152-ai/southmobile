const productsModel = require('../models/productsModel');
// const ProductModel = require('../models/productsModel');

exports.getproducts = async (req, res) => {
    const data = await productsModel.find();

    // console.log('images',data[0].images);

    res.json({
        success: true,
        message: 'get products working',
        data
    })
}

exports.insertProduct = async (req, res) => {
    // const {name,price,description,stock} = req.body;
    if (req.body.name && req.body.price && req.body.description && req.body.stock) {
        const product = new Product({ name: req.body.name, price: req.body.price, description: req.body.description, stock: req.body.stock });
        await product.save();
        return res.status(200).json({ message: 'Insert success' });
    } else {
        return res.status(400).json({ message: 'Some field are missing' })
    }
}

exports.getSingleproducts = async (req, res,) => {

    try {
        const product = await productsModel.findById(req.params.id);
        res.json({
            success: true,
            data: product
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Unable to get Product with that ID'
        })
    }

}