/*const cardArray = [
    {
        name: 'cherries',
        img: 'Patterns page 44.jpeg',
    },
    {
        name: 'candy',
        img: 'Minecraft Pixel Art Templates.jpeg',
    },
    {
        name: 'cookie',
        img: 'Giant Cookie Perler Kandi Pattern.jpeg',
    },
    {
        name: 'choclate',
        img: 'choclate.jpeg',
    },
    {
        name: 'burger',
        img: 'Burger.jpeg',
    },
    {
        name: 'cupcake',
        img: 'Cupcake.jpeg',
    },
    {
        name: 'noodles',
        img: 'Noodles.jpeg',
    },
    {
        name: 'grapes',
        img: 'Grapes.jpeg',
    },
    {
        name: 'ice-cream',
        img: 'Ice-cream.jpeg',
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
const cardsChosen = []
const cardsChosenIds = []
const cardsWon = []

function createBoard () {
    gridDisplay.innerHTML = '';

    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'banner.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard); //this is basically the callback.
        gridDisplay.appendChild(card); //this should display the image: images\banner.jpg as the grid_cover
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match!')
    
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src','banner.jpg') 
        cards[optionTwoId].setAttribute('src','banner.jpg')
        alert('You have clicked the same image!')
    }

    if (cardChosen[0] == cardChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src','Beer.jpeg')
        cards[optionTwoId].setAttribute('src','Beer.jpeg')
        cards[optionOneId].removeEventListener('src', flipCard)
        cards[optionTwoId].removeEventListener('src', flipCard) 
        cardsWon.push(cardsChosen)
    } else{
        cards[optionOneId].setAttribute('src','banner.jpg') 
        cards[optionTwoId].setAttribute('src','banner.jpg')
        alert('Sorry try again!')
    }
        resultDisplay.textContent = cardsWon.length
        cardsChosen = []
        cardsChosenIds = []

        if (cardsWon.length == cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations you found them all!'    
        }
        
}

function flipCard() {
    console.log(cardArray);
    const cardId = this.getAttribute('data-id'); // the this key-word is allowing us to interact with any element we click on basically
    console.log('clicked card ID:', cardId);
    cardChosen.push(cardArray[cardId].name);
    console.log('clicked', cardId);  //this will return the card id, once the card is clicked and flipped.
    if (!cardChosen.includes(cardArray[cardId].name)) {
        cardChosen.push(cardArray[cardId].name)
    }
    console.log(cardChosen);
    this.setAttribute('src', cardArray[cardId].img);
}*/

//The code below is a revised version from poe.ai, while the code above is my code, that poe analysed and made a few adjustments.
//Given you actually inspect both programs, you'll notice that they're pretty much the same, only difference is due to power cuts, the code above took me about a day plus to kinda debug, but still is flagging some errors and complete.
//Feel free to let me know of any problems the code above has, and by the same token feel free to share solutions and inovative add-ons.  
//One more thing, kindly be kind and mindful of any critique you might have on this program, this my very first JS program


const cardArray = [
    { 
        name: 'cherries', 
        img: 'images/Patterns page 44.jpeg' 
    },
    { 
        name: 'candy', 
        img: 'images/Minecraft Pixel Art Templates.jpeg' 
    },
    { 
        name: 'cookie', 
        img: 'images/Giant Cookie Perler Kandi Pattern.jpeg' 
    },
    { 
        name: 'choclate', 
        img: 'images/choclate.jpeg' 
    },
    { 
        name: 'burger', 
        img: 'images/Burger.jpeg' 
    },
    { 
        name: 'cupcake', 
        img: 'images/Cupcake.jpeg' 
    },
    { 
        name: 'noodles', 
        img: 'images/Noodles.jpeg' 
    },
    { 
        name: 'grapes', 
        img: 'images/Grapes.jpeg' 
    },
    { 
        name: 'ice-cream', 
        img: 'images/Ice-cream.jpeg' 
    }
];

// Shuffle the card array for random placement
cardArray.sort(() => 0.5 - Math.random());

// Selectors for DOM elements
const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');

// Arrays to track chosen cards and matches
const cardsChosen = [];
const cardsChosenIds = [];
const cardsWon = [];

// Function to create the game board
function createBoard() {
    gridDisplay.innerHTML = ''; // Clear any existing cards

    // Create image elements for each card
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/banner.jpg'); // Default image
        card.setAttribute('data-id', i); // Set data-id for tracking
        card.addEventListener('click', flipCard); // Add click event
        gridDisplay.appendChild(card); // Append card to grid
    }
}

createBoard(); // Initialize the game board

// Function to check if two selected cards match
function checkMatch() {
    const cards = document.querySelectorAll('img'); // Select all card images
    const optionOneId = cardsChosenIds[0]; // ID of the first selected card
    const optionTwoId = cardsChosenIds[1]; // ID of the second selected card
    console.log(cards); // Log all card elements
    console.log('Check for match!'); // Log the check action

    // Check if the same card was clicked twice
    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/banner.jpg'); // Reset the card image
        cards[optionTwoId].setAttribute('src', 'images/banner.jpg'); // Reset the card image
        alert('You have clicked the same image!'); // Alert the user
    } else {
        // Check if the two selected cards match
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!'); // Notify the user about the match
            cards[optionOneId].setAttribute('src', 'images/Beer.jpeg'); // Indicate a match
            cards[optionTwoId].setAttribute('src', 'images/Beer.jpeg'); // Indicate a match
            // Remove the click event listener to prevent further clicks
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen.slice()); // Add matched cards to the cardsWon array
        } else {
            // If no match, reset images after a short delay
            setTimeout(() => {
                cards[optionOneId].setAttribute('src', 'images/banner.jpg'); // Reset the first card image
                cards[optionTwoId].setAttribute('src', 'images/banner.jpg'); // Reset the second card image
                alert('Sorry, try again!'); // Notify the user about the mismatch
            }, 1000); // Delay reset by 1 second
        }
    }

    // Update the result display with the number of matches found
    resultDisplay.textContent = cardsWon.length;

    // Reset the chosen cards for the next round
    cardsChosen.length = 0; // Clear the array
    cardsChosenIds.length = 0; // Clear the IDs array

    // Check if all pairs have been found
    if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.textContent = 'Congratulations, you found them all!'; // Victory message
    }
}

// Function to flip a card
function flipCard() {
    const cardId = this.getAttribute('data-id'); // Get the ID of the clicked card
    console.log('clicked card ID:', cardId); // Log the clicked card ID
    cardsChosen.push(cardArray[cardId].name); // Add the name of the card to chosen array
    cardsChosenIds.push(cardId); // Add the ID of the card to chosen IDs

    console.log('Chosen cards:', cardsChosen); // Log currently chosen cards
    this.setAttribute('src', cardArray[cardId].img); // Show the card's image

    // Check if two cards have been chosen
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500); // Delay match checking to allow for card display
    }
}