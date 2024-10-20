import {imageArr} from './portfolioImages'

const portfolioData= {

    portfolio: {
        swifty: {
            title: "Swifty",
            description: {
                swe: "Swifty är en applikation som ska effektivisera detaljhandel genom att samla flera inköp från kunder och leverera dem samma dag. Projektet är fortfarande under utveckling. Teknologier som används är Android, Spring Boot och Firebase.",
                eng: "Swifty is an application designed to streamline retail by gathering multiple customer purchases and delivering them on the same day. This project is still under development. Technologies being used include Android, Spring Boot, and Firebase."
            },
            images: imageArr.swiftyImages,
        },
        prodcons: {
            title: "Producer Consumer",
            description: {
                swe: "Ett Java-program som implementerar ett \"Producer-Consumer\" mönster med trådar. Det använder sig av Singleton och Single Responsibility-principen för att säkerställa effektiv resurshantering och underhållbarhet. Dessutom följer det MVC-arkitekturen för att separera datahantering, användargränssnitt och logik.",
                eng: "A Java program that implements a \"Producer-Consumer\" pattern using threads. It uses Singleton and Single Responsibility principles to ensure efficient resource management and maintainability. Additionally, it adheres to the MVC architecture, separating data handling, user interface, and logic concerns."
            },
            images: imageArr.producerConsumerImages
        },
        minmax: {
            title: "Min Max",
            description: {
                swe: "Här har jag utvecklat ett luffarschack-spel där jag implementerat en minmax-algoritm för att säkerställa att datorn alltid gör det mest strategiskt fördelaktiga draget. Spelaren får kontinuerligt tips om optimala drag.",
                eng: "Here I have developed a tic-tac-toe game, I've integrated a min-max algorithm to ensure the computer consistently makes strategically advantageous moves. The player is provided with ongoing suggestions for optimal moves."
            },
            images: imageArr.minMaxImages
        },
        stateMachine: {
            title: "State machine",
            description: {
                swe: "Här har jag utvecklat en klocka med förmåga att visa och ändra både tid och datum. Applikationen är strukturerad som en state machine, vilket kräver korrekt status för att nå vissa funktioner. Detta säkerställer en smidig och pålitlig användarupplevelse.",
                eng: "Here I have created a clock with the capability to display and adjust both time and date. The application is structured as a state machine, requiring the correct state to access specific features. This ensures a smooth and reliable user experience."
            },
            images: imageArr.stateMachineImages
        },
        swosh: {
            title: "Swosh",
            description: {
                swe: "Här har jag skapat ett betalsystem som möjliggör dynamisk hantering av användare, transaktioner och flerfaldiga konton med varierande belopp. Konton har möjlighet till detaljerad transaktionshistorik. Endast användare med Swosh-konton kan interagera med systemet. Projektet implementerades i Java och använde en MySQL-databas för datalagring.",
                eng: "Here I have created a payment system that enables dynamic management of users, transactions, and multiple accounts with varying amounts. Accounts have the capability for detailed transaction history. Only users with Swosh accounts can interact with the system. The project was implemented in Java and utilized a MySQL database for data storage."
            },
            images: imageArr.swoshImages
        },
        reactShop: {
            title: "React shop",
            description: {
                swe: "En React-baserad one page webbshop med en integrerad HTML-fil. Applikationen har en meny med valen \"Produkter\" och \"Kundvagn\". Användaren kan bläddra bland produkter, lägga till dem i kundvagnen och slutföra köp. Produktsidan hämtar data från Firebase och visar namn, bild, pris och lagersaldo. Kundvagnssidan visar antal produkter och totalpris, och låter användaren tömma kundvagnen.",
                eng: "A React-based one-page webshop with an integrated HTML file. The application has a menu with the options \"Products\" and \"Shopping Cart\". The user can browse products, add them to the shopping cart, and complete the purchase. The product page retrieves data from Firebase and displays the name, image, price, and stock balance. The shopping cart page shows the number of products and the total price, and allows the user to empty the cart."
            },
            images: imageArr.reactShopImages
        },
        restService: {
            title: "Rest service",
            description: {
                swe: "I detta projekt utvecklade jag en dynamisk RESTful Web Service där jag valde att lösa uppgiften med Spring Boot-ramverket. Tjänsten är utformad för att hantera inkommande requests via POST, GET, PUT och DELETE-metoderna. Jag implementerade även enhetstester för att säkerställa korrekt funktionalitet.",
                eng: "In this project, I developed a dynamic RESTful Web Service, choosing to solve the task using the Spring Boot framework. The service is designed to handle incoming requests via the POST, GET, PUT, and DELETE methods. Additionally, I implemented unit tests to ensure proper functionality."
            },
            images: imageArr.restServiceImages
        },
        searchJs: {
            title: "Flickr photo gallery",
            description: {
                swe: "En webbsida där användare kan söka efter foton från Flickr. Genom ett sökformulär kan de ange söktext, antal foton och storlek. Resultaten presenteras anpassade efter användarens val. Sidan innehåller felhantering som säkerställer en smidig upplevelse. Avancerade alternativ inkluderar sortering och förstoring av bilder i en ny flik.",
                eng: "A website where users can search for photos from Flickr. Through a search form, they can input search text, number of photos, and size. The results are displayed according to the user's selections. The page includes error handling to ensure a smooth experience. Advanced options include sorting and enlarging images in a new tab."
            },
            images: imageArr.searchJs
        }
    },
    heading: {
        swe: "Mina projekt",
        eng: "My Projects"
    },
    paragraphPlaceholder: {
        swe: 'Förbereder information om projektet. Kom tillbaka snart för att få veta mer!',
        eng: 'Preparing information about the project. Come back soon to learn more!'
    }
};

export default portfolioData
