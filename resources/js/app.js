const { update } = require("../../app/modules/menu")
import axios from 'axios'
 
let addTOCart = document.querySelectorAll('.add-to-cart')

function updateCart(pizza){
         axios.post('/update-cart',pizza),then(res => {
             console.log(res)
         })
}

 addTOCart.forEach((btn)=>{
     btn.addEventListener('click',(e)=>{
         //console.log(e)

         let pizza=JSON.parse(btn.dataset.pizza)
         updateCart(pizza)
     })
 })