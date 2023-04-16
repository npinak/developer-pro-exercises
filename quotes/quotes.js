const quotes = [
    {
        author: "Albert Einstein",
        quote: "Imagination is more important than knowledge.",
        picture: "https://i.guim.co.uk/img/static/sys-images/Technology/Pix/site_furniture/2007/02/07/einstein128.jpg?width=620&quality=45&dpr=2&s=none",
        number: 0,
    },
    {
        author: "Nelson Mandela",
        quote: "It always seems impossible until it is done.",
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/640px-Nelson_Mandela_1994.jpg",
        number: 1,
    },
    {
        author: "Maya Angelou",
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        picture: "https://hips.hearstapps.com/hmg-prod/images/maya_angelou_photo_by_deborah_feingold_corbis_entertainment_getty_533084708.jpg",
        number: 2,
    },
    {
        author: "Walt Disney",
        quote: "All our dreams can come true, if we have the courage to pursue them.",
        picture: "https://hips.hearstapps.com/hmg-prod/images/walt-disney-united-artistis-photofest-cropped.jpg",
        number: 3,
    },
    {
        author: "Martin Luther King Jr.",
        quote: "The time is always right to do what is right.",
        picture: "https://hips.hearstapps.com/hmg-prod/images/martin-luther-king-jr-9365086-2-402.jpg",
        number: 4,
    },
    {
        author: "Pablo Picasso",
        quote: "Every child is an artist. The problem is how to remain an artist once he grows up.",
        picture: "https://mymodernmet.com/wp/wp-content/uploads/2019/02/pablo-picasso-facts.jpg",
        number: 5,
    },
];

const warmPastelColors = [
    "#F5B7B1", // Light Pink
    "#F8C471", // Maize
    "#F9E79F", // Pastel Yellow
    "#FAD7A0", // Light Apricot
    "#F5CBA7", // Champagne
    "#D7BDE2", // Lavender Gray
    "#A9DFBF", // Pale Mint
    "#73C6B6", // Light Sea Green
    "#76D7C4", // Dark Turquoise
    "#F2D7D5", // Pale Pink
    "#F7DC6F", // Light Gold
    "#E59866", // Sandstone
];


function generateQuote () {

    // stop text to speech
    speechSynthesis.cancel()

    // To randomly get a quote from the array
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    let quoteText = randomQuote.quote
    let authorText = randomQuote.author
    let img = randomQuote.picture

    document.getElementById("quoteText").textContent = quoteText;
    document.getElementById("authorText").textContent = `- ${authorText}`
    document.getElementById("profilePic").src = img

    // change background color 
    const color = warmPastelColors[Math.floor(Math.random() * warmPastelColors.length)];
    document.body.style.backgroundColor = color;

    //Speak text
    const utterance = new SpeechSynthesisUtterance(quoteText)
    utterance.rate = 1
    const numberVoice = Math.floor(Math.random() * 48)
    const voice = window.speechSynthesis.getVoices()[numberVoice]
    utterance.voice = voice
    speechSynthesis.speak(utterance)

    console.log(voice)
    return
}

const generateButton = document.getElementById("generateButton")
const textToSpeechButton = document.getElementById("textToSpeechButton")

// add event listener to generate quote
generateButton.addEventListener('click', generateQuote)

//use spacebar to generate quote
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        generateQuote()
    }
})

let speechText 
// Generate first quote on load
generateQuote()

// // add event listener to speak text
// textToSpeechButton.addEventListener('click', playText(speechText))




