const cardArray = [
    {
        name: "pizza",
        img : 'pizza.png'
    },
    {
        name: "fries",
        img : 'fries.png'
    },
    {
        name: "cheeseburger",
        img: "cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "hotdog.png"
    },
    {
        name: "ice-cream",
        img: "ice-cream.png"
    },
    {
        name: "milkshake",
        img: "milkshake.png"
    },
     {
        name: "pizza",
        img : 'pizza.png'
    },
    {
        name: "fries",
        img : 'fries.png'
    },
    {
        name: "cheeseburger",
        img: "cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "hotdog.png"
    },
    {
        name: "ice-cream",
        img: "ice-cream.png"
    },
    {
        name: "milkshake",
        img: "milkshake.png"
    }

]

cardArray.sort(()=> 0.5- Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')

let cardChoosen= []
let cardChoosenId =[]
const cardWon = []

// console.log(gridDisplay)

function createBoard(){
    for(let i = 0; i< cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('data-id', i)
        card.setAttribute('src', 'blank.png')
        card.addEventListener('click', flipCard)
       gridDisplay.appendChild(card)
    }
}

function checkMatch(){

    
    const cards = document.querySelectorAll('#grid img')
    console.log(cardArray)
    const optionOneId = cardChoosenId[0]
    const optionTwoId= cardChoosenId[1]
    console.log("check Match")

    if(optionOneId == optionTwoId ){

        cards[optionOneId].setAttribute('src', 'blank.png')
        cards[optionTwoId].setAttribute('src', 'blank.png')
        alert("you Choose Same Card Again! Refresh Again")
        
        
    }

    if( cardChoosen[0] === cardChoosen[1]){
        alert("You Found a Match!")
        cards[optionOneId].setAttribute('src', 'white.png')
        cards[optionTwoId].setAttribute('src', 'white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardWon.push(cardChoosen)
        }
        else{
            cards[optionOneId].setAttribute('src', 'blank.png')
            cards[optionTwoId].setAttribute('src', 'blank.png')
            alert("Sorry Try Again! ")
        }

    resultDisplay.textContent = cardWon.length 
    cardChoosen = []
    cardChoosenId = []

    if(cardWon.length == cardArray.length/2){
        resultDisplay.textContent = "Congratulations You found all!";
    }
}

createBoard()

function flipCard(){
    let cardId = this.getAttribute('data-id')
  
    cardChoosen.push(cardArray[cardId].name)
    cardChoosenId.push(cardId)

    console.log(cardChoosen)
    console.log(cardChoosenId)
    
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChoosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}