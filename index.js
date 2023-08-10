const express = require('express');
var app = express();
var path = require('path');
let { foods } = require('./data')
let { headers } = require('./data')
let { kart } = require('./data')
let { totalKart } = require('./data')

app.use(express.urlencoded(({ extended: true})))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ success: true, data: foods})
})

app.get('/main.html/kart', (req,res)=> {
    res.json({ success: true, data: kart})
    console.log(kart)
})

app.get('/main.html/total', (req,res)=> {
    res.json({ success:true, data: totalKart})
    console.log(totalKart)
})

app.put('/main.html/total/:id', (req,res)=> {
    const itemToUpdate = req.params.id
    const { total } = req.body 
    let totalToUpdate2 = totalKart.total
    total.total = total
    res.json({success: true, data: total})
})

app.post('/main.html/kart', (req,res)=> {
    const { filtered, link, quantity, price } = req.body
    const newItem = {filtered, link, quantity, price}
    kart.push(newItem)
    // console.log(kart)
    res.json({success: true, data: {filtered, link, quantity, price}})
})

app.put('/main.html/kart', (req,res) => {
    const { filtered } = req.body
    const { quantity }  = req.body
    let newKart = kart.map((item) => {
        if(item.filtered === filtered)
        {
           return item.quantity = quantity
        }
        
    })
    // console.log(newKart)
    res.json({success:true, data: {newKart}})
})

app.delete('/main.html/kart/:id', (req,res) => {
    try {
    const dataToDelete = req.params.id
    kart = kart.filter((item) => item.filtered !== dataToDelete)  
    // console.log(kart)
       return res.json({ success: true, data: kart})
    }
    catch (e) {
        console.log("ERROR", e.message)
        res.json({success: false, message: "Error ocurred!"})
    }
    })

    app.put('/main.html/kart/:id', (req,res) => {
    const itemToUpdate = req.params.id
       const { filtered } = req.body
       const { link } = req.body
       const { quantity } = req.body
       console.log("filtered:")
       console.log(filtered)
       console.log("link:")
       console.log(link)
       console.log("quantity:")
       console.log(quantity)
            console.log(itemToUpdate)
            try {
            let newKart = kart.map((item) => {
                if(item.filtered === filtered)
                {
                   return item.quantity = quantity
                }
                
            })
            console.log("WE MADE IT!")
            res.json({success: true, data: newKart})
            }
            catch(e) 
            {
                console.log("ERROR", e.message)
            }
            }
    )
       
    

    




app.get('/main.html/:foodType', (req, res) => {
    //Return the items from data base, filter them using array method:
    const {foodType} = req.params;
    let singleFood = foods.filter((food) => food.type === foodType)
    let singleHeader = headers.filter((header) => header.inputValue === foodType)
    res.json({
        foodsJson: singleFood, 
        headersJson: singleHeader,
        kartJson : kart
    })

//---------
})

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log("LISTENING TO THE SERVER 3000!")
})