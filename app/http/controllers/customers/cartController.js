function cartController(){
    return {
        cart(req,res){
            res.render('customers/cart')

        },
        update(req,res){
            if(req.session.cart){
                req.session.cart={
                    items:{},
                    totalQty:0,
                    totalPrice:0
                }
               

            }
            let cart=req.session.cart
            console.log(req.body)
            return res.json({data:'ALL OK '})
        }

        
    }
}

module.exports=cartController