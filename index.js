
const cart =[]
let items =[]

window.onload = () => {
     fetchAPI()
    addSearchBar()
}



const fetchAPI = () => {
    fetch('https://striveschool-api.herokuapp.com/books')
    .then(response => response.json())
    .then(body => {
items = body
        displayData(body)
        
        // console.log(body)
      
    })
}

const displayData = (arr) => {
    arr.forEach(book => {
        // console.log(book.img)
        let rowNode = document.querySelector('.row')

        let colNode = document.createElement('div')
        colNode.classList.add('col-3')
        colNode.innerHTML = `
            <div class="card" id=${book.asin} >
                <img src="${book.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary"  onclick="addToCart(event)">Add to Cart</a>
                    <button type="button" class="btn btn-outline-success" onclick="removeThisBook(event)">Skip</button>
                </div>
            </div>
            `
        rowNode.appendChild(colNode)    
    })
}

const displayTotalItems = () => {
    const total = cart.length
    document.querySelector("#total").innerHTML = total

}


const displayCart = (event) => {
    const id = event.target.closest(".card").id
    // console.log(event.target.closest('.card'))
    // const item = items.find(item => item.asin===id)
    let cartRowNode = document.querySelector('.cart')
    cartRowNode.innerHTML = ''
    cart.forEach(item => {
        console.log(item)
    
    // console.log(cart)
    
    
    
        let colNode = document.createElement('div')
        colNode.classList.add('col-3')
        colNode.innerHTML = `
            <div class="card">
                <img src="${item.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            `
        cartRowNode.appendChild(colNode)
    })

}

    const addToCart = (event) => {
        const id = event.target.closest(".card").id
        const item = items.find(item => item.asin===id)
       cart.push(item)
        // console.log(cart)
        displayCart(event)
        displayTotalItems()
       
        // let imgSrc = event.target.closest('.card').childNodes[1].src
        // console.log(imgSrc)
    
        // let cartRowNode = document.querySelector('.cart')
    
        // let colNode = document.createElement('div')
        // colNode.classList.add('col-3')
        // colNode.innerHTML = `
        //     <div class="card">
        //         <img src="${imgSrc}" class="card-img-top" alt="...">
        //         <div class="card-body">
        //             <h5 class="card-title">Card title</h5>
        //             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //             <a href="#" class="btn btn-primary">Go somewhere</a>
        //         </div>
        //     </div>
        //     `
        // cartRowNode.appendChild(colNode)
    }
    const removeThisBook = (event) => {
        console.log(event.target.closest('.col-3'))
        event.target.closest('.col-3').remove()
    }

    const addSearchBar = () => {
        let inputNode = document.createElement('input')
        inputNode.type = 'search'
        // console.log(inputNode)
        let containerNode = document.querySelector('.container')
        containerNode.prepend(inputNode)
        inputNode.addEventListener('keydown', searchFunction)
    }

    const searchFunction = (event) => {
        if (event.target.value.length > 3) {
            // console.log(items.title)
            const filteredItems = items.filter(item => {
                item.title.includes(event.target.value) 
                console.log(filteredItems)
            })
        }
    }