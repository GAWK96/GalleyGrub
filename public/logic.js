const btn = document.getElementById("ok")
const slt = document.getElementById("options")
let slc = document.getElementById("select")
let leftRight = document.getElementById("left-right")

//Set the routes to render the information on "Place your order" section:
const invokePlace = async() => {
    if (leftRight.hasChildNodes() === true)
{
    while (leftRight.hasChildNodes() === true)
    {
        leftRight.removeChild(leftRight.firstChild)
    }
}

    try {
        const value = slt.value
        let param1 = '/main.html/'
        let param2 = value
        let param3 = param1 + param2
     let { data } = await axios.get(param3)
     console.log(data)
     console.log("HELLO!")
     const dataToBeUsed = data.foodsJson
     console.log(dataToBeUsed)  
     const currentKart = data.kartJson
     console.log(currentKart)
     console.log(currentKart.length)
     console.log("DATA OF THE KART HERE!")
     console.log(data.headersJson[0].header);
     const h2 = document.createElement('h2');
     h2.textContent =  data.headersJson[0].header;
     h2.id = data.headersJson[0].header
     const divImgs = document.createElement('div');
     divImgs.id =  "divImgs"
     leftRight.appendChild(h2);
     leftRight.appendChild(divImgs);
     for(i = 0; i < data.foodsJson.length; i++) {
     let div = document.createElement('div');
     div.id = 'items'
     let img = document.createElement("img")
     img.src =  data.foodsJson[i].link
     img.id = 'imgs'
     let desc = document.createElement('h4')
     desc.textContent = data.foodsJson[i].name
     let price = document.createElement('h5')
     price.textContent = data.foodsJson[i].price
     let selectors = document.createElement('button')
     selectors.textContent = 'Add!'
     selectors.id = data.foodsJson[i].name
     selectors.classList.add("each")
     div.appendChild(img)
     div.appendChild(desc)
     div.appendChild(price)
     div.appendChild(selectors)
     divImgs.appendChild(div)
     }

     btn.addEventListener('click', invokePlace)
   
    const buttons = document.querySelectorAll(".each")
    
    let buttonHandler = buttons.forEach(button => button.addEventListener("click", async(event) => {
        try {
        const extractData = dataToBeUsed.filter((required) => required.name === event.target.id)
        console.log(extractData)
        console.log("extracted data OF THE ITEM ABOUT TO BE ADDED/UPLOADED above!")    
        let sum = 0
        let qtdAdd = 0
          for ( i = 0; i < currentKart.length ; i++)
          {
               if (extractData[0].filtered === currentKart[i].filtered)
               {
                 sum = sum + 1
                 qtdAdd = currentKart[i].quantity
               } 
          }
          console.log("THE SUM IS = ", sum)
          //Depending on the result of the if, we will have different kind of routes:
          if (sum === 0) { 
        const extractData = dataToBeUsed.filter((required) => required.name === event.target.id) 
        let { data } = await axios.post('/main.html/kart', {filtered: extractData[0].filtered, link: extractData[0].link, quantity: 1,price: extractData[0].price})
        const inf = data.data
        console.log(inf)
        alert(extractData[0].filtered + " Added!")
        let refresh = function(){
            document.location.href = 'http://localhost:3000/main.html'
            }
          }
          else {
            const extractData = dataToBeUsed.filter((required) => required.name === event.target.id) 
            const dataToUpdate =
            {
            filtered: extractData[0].filtered,
            quantity: qtdAdd + 1
            }

            let { data } = await axios.put('/main.html/kart', dataToUpdate)
            let inf = data.data
            console.log(inf)
            console.log("DATA TO UPDATE BELOW:")
            console.log(inf)
            alert(extractData[0].filtered + " Added!")
            let refresh = function(){
                document.location.href = 'http://localhost:3000/main.html'
                }
                 refresh()
          }
        }
        catch (e)
       {
        console.log("ERROR", e.message)
       }  
    }),
    )
    buttons.forEach(button => button.addEventListener("click", buttonHandler))
    buttons.forEach(button => button.addEventListener("click", function(){
    document.location.href = 'http://localhost:3000/main.html'
    })
    )   

}

    catch 
{
    console.log("ERROR", e.message)
}

}
btn.addEventListener('click', invokePlace)

const buttons = document.querySelectorAll(".each")
buttons.forEach(button => button.addEventListener("click", buttonHandler()))

//Getting the information of the data base and rendering it on the front end:
let rightDiv = document.getElementById("kart")
const option = [] 
const invoke = async () => {
    try 
    {
    let { data } = await axios.get('/main.html/kart/')
    console.log(data.data.length)
    let array = data.data
    let totalToPay = 0
    for(i = 0;i < array.length; i++) {
    const divItem = document.createElement('div')
    divItem.id = "itemsKart"    
    const img2 = document.createElement('img')
    img2.id = "img2"
    img2.src = data.data[i].link 
    const divKart = document.createElement('div')
    const item = document.createElement('h5')
    item.textContent = data.data[i].filtered
    const selectToDelete = document.createElement('select') 
    selectToDelete.id = data.data[i].filtered
    selectToDelete.className = "qtyOfItems"
    selectToDelete.name = data.data[i].filtered
        let sumItems = 0
        for(let j = 0;j < data.data[i].quantity; j++)
        {
        sumItems = sumItems + 1
        option[j] = document.createElement('option');
        option[j].value = sumItems;
        option[j].textContent = sumItems;
        selectToDelete.appendChild(option[j])
        }
        let times = sumItems
        selectToDelete.value = option.length
        const buttonToDelete = document.createElement('button')
        buttonToDelete.className = "delete"
        buttonToDelete.id = data.data[i].filtered
        buttonToDelete.className = "delete"
        buttonToDelete.textContent = "delete!"
        let valuePrice = data.data[i].price 
        valuePrice = valuePrice.slice(1)
        valuePrice = parseFloat(valuePrice)
        valuePrice = valuePrice*(data.data[i].quantity)
        valuePrice = parseFloat(valuePrice).toFixed(2)
        const priceItem = document.createElement('h5')
        priceItem.id = "toPay"
        priceItem.textContent = `$ ${valuePrice}`;
        totalToPay = totalToPay + (times*valuePrice)
        console.log("total to pay:")
        console.log(totalToPay)
    divKart.appendChild(item)
    divKart.appendChild(selectToDelete) 
    divKart.appendChild(priceItem)
    divItem.appendChild(img2)
    divItem.appendChild(divKart)
    divItem.appendChild(buttonToDelete)
    rightDiv.appendChild(divItem)
    }
    let divTotal = document.createElement('div')
    divTotal.id = 'itemsToPay'
    let descriptionToPay = document.createElement('h5')
    descriptionToPay.textContent = 'Total To Pay:'
    let totalItemsToPay = document.createElement('h5')
    totalItemsToPay.textContent = (`$ ${parseFloat(totalToPay).toFixed(2)}`)
    divTotal.appendChild(descriptionToPay)
    divTotal.appendChild(totalItemsToPay)
    let buttonPay = document.createElement('button')
    buttonPay.textContent = "Finish order!"
    buttonPay.id = "ok"
    if(totalToPay !== 0){
    rightDiv.appendChild(divTotal)
    rightDiv.appendChild(buttonPay)
    buttonPay.addEventListener('click', () => {
        window.location.href = '/finish.html'; 
    });
    }
    const buttonsDelete = document.querySelectorAll(".delete")
    //setting the routes when you click on delete buttons
    let buttonHandlerDelete = buttonsDelete.forEach(button => button.addEventListener("click", async(event) => {
        let extractData = array.filter((required) => required.filtered === event.target.id)
        console.log("Extracted data above!")
        let valueSelector = document.getElementById(`${event.target.id}`)
        const dataToDelete = extractData[0].filtered
        let param1 = '/main.html/kart/'
        let param2 = dataToDelete
        let param3 = param1 + param2
        if (parseInt(valueSelector.value) === extractData[0].quantity){
            let { data } = await axios.delete(param3)
        alert(`${extractData[0].filtered} deleted!`)
        const reset = function(){
        document.location.href = 'http://localhost:3000/main.html'
        }
        reset()
        console.log(data)
        
        }
        else {
            alert(`${valueSelector.value} ${extractData[0].filtered} deleted!`)
            const dataToUpdate2 =
            {
                filtered: extractData[0].filtered,
                link: extractData[0].link,
                quantity: extractData[0].quantity - parseInt(valueSelector.value)
            }
            const { data } = await axios.put(param3, dataToUpdate2)
            const inf = data.data
            const reset = function(){
            document.location.href = 'http://localhost:3000/main.html'
             }
            reset()
        }
        }),
    )
}
    catch (e)
{
    console.log("ERROR", e.message)
}
    const buttonsDelete = document.querySelectorAll(".delete")
    }
invoke()






