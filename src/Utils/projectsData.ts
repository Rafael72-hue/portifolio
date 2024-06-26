import { CalculadoraModoClaro, CalculadoraPoster } from "../assets/screenshots/calculadora";
import { 
    NlwEsportsPoster, 
    NlwEsportsPublishAnnouncement, 
    NlwEsportsMobile, 
    NlwEsportsMobileCards, 
    NlwEsportsMobileCardDescription 
} from "../assets/screenshots/nlw_e_sports";
import {
    NlwLetMeKnowPoster, 
    NlwLetMeKnowFeatureHome, 
    NlwLetMeKnowFeatureTrouble, 
    NlwLetMeKnowFeatureFeedbackSended
} from "../assets/screenshots/nlw_let-me-know";
import {
    MovieFlixPoster, 
    MovieFlixHomePage, 
    MovieFlixMovieSection, 
    MovieFlixSearchField
} from "../assets/screenshots/movieflix";
import {
    NodeApi1,
    NodeApi2 
} from "../assets/screenshots/nodeApi";

export const PROJECT_DATA = [
    {
        id: 1,
        poster: CalculadoraPoster,
        posterText: "Imagem of a calculator",
        projectName: 'Calculadora',
        description: 'One of my first projects, made only in HTML, CSS, JS created to practice programming logic, with a dark mode depending on the time the user accesses it.',
        screenshots: [
            {
                id: 1,
                imageUrl: CalculadoraModoClaro,
                alternativeText: 'Light mode'
            },
            {
                id: 2,
                imageUrl: CalculadoraPoster,
                alternativeText: 'Dark mode'
            },
        ]
    },
    {
        id: 2,
        poster: NlwEsportsPoster,
        posterText: "NLW E-Sports main screen page",
        projectName: 'NLW E-Sports',
        description: "A complete application made in React (web), React Native (mobile), NodeJS (backend) and SQL (database), made during rocketseat's NLW week. This application aims to find a duo for some gaming time, you can even create an ad with the days and times when you will be available.",
        screenshots: [
            {
                id: 1,
                imageUrl: NlwEsportsMobileCards,
                alternativeText: ''
            },
            {
                id: 2,
                imageUrl: NlwEsportsMobileCardDescription,
                alternativeText: ''
            },
            {
                id: 3,
                imageUrl: NlwEsportsPoster,
                alternativeText: ''
            },
            {
                id: 4,
                imageUrl: NlwEsportsPublishAnnouncement,
                alternativeText: ''
            },
            {
                id: 5,
                imageUrl: NlwEsportsMobile,
                alternativeText: ''
            },
        ]
    },
    {
        id: 3,
        poster: NlwLetMeKnowPoster,
        posterText: "NLW Let me know main screen image",
        projectName: 'NLW Let me know',
        description: "This is an application made in React (front) and NodeJS (back) using SQL for the database. It is a feedback feature that can be used on different websites, where the user has the option to send feedback and which also has a button that can take a screenshot of the user's screen so that the dev can locate the reported error more quickly. ease.",
        screenshots: [
            {
                id: 1,
                imageUrl: NlwLetMeKnowFeatureHome,
                alternativeText: 'Feature home screen'
            },
            {
                id: 2,
                imageUrl: NlwLetMeKnowFeatureTrouble,
                alternativeText: 'one of the selected options'
            },
            {
                id: 3,
                imageUrl: NlwLetMeKnowFeatureFeedbackSended,
                alternativeText: 'Sent feedback screen'
            }
        ]
    },
    {
        id: 4,
        poster: MovieFlixPoster,
        posterText: "MovieFlix main screen image",
        projectName: 'MovieFlix',
        description: 'This is an application made in Angular using TheMovieDB API. I did this project to practice componentization in some Angular concepts. In this application the user will have a list of films and series, where they can see details and information about a film/series, it also has a field to search for a film/series and pagination.',
        screenshots: [
            {
                id: 1,
                imageUrl: MovieFlixHomePage,
                alternativeText: 'movieflix home screen'
            },
            {
                id: 2,
                imageUrl: MovieFlixMovieSection,
                alternativeText: 'movie section of the application'
            },
            {
                id: 3,
                imageUrl: MovieFlixSearchField,
                alternativeText: 'screen displaying the search field'
            }
        ]
    },
    {
        id: 5,
        poster: NodeApi1,
        posterText: "Node Api",
        projectName: 'Node API',
        description: 'Api made in nodeJS, using tools such as mongoos to insert data into the database which is mongoDB, the idea is that it is possible to create and log in a user, for this purpose endpoints were created to make requests',
        screenshots: [
            {
                id: 1,
                imageUrl: NodeApi1,
                alternativeText: 'Method to validate Login'
            },
            {
                id: 2,
                imageUrl: NodeApi2,
                alternativeText: 'Schema to create an manipulate users'
            },
        ]
    },
];