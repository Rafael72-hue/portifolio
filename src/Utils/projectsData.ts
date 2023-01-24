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

export const PROJECT_DATA = [
    {
        id: 1,
        poster: CalculadoraPoster,
        posterText: "Imagem de uma calculadora",
        projectName: 'Calculadora',
        description: 'Um dos meus primeiros projetos, feito apenas em HTML, CSS, JS criado para práticar a lógica de programação, contando com um modo escuro dependendo do horário em que usuario acessar.',
        screenshots: [
            {
                id: 1,
                imageUrl: CalculadoraModoClaro,
                alternativeText: 'Modo claro'
            },
            {
                id: 2,
                imageUrl: CalculadoraPoster,
                alternativeText: 'Modo escuro'
            },
        ]
    },
    {
        id: 2,
        poster: NlwEsportsPoster,
        posterText: "Imagem da tela principal do NLW E-Sports",
        projectName: 'NLW E-Sports',
        description: 'Uma aplicação completa feito em React(web), React Native(mobile), NodeJS(backend) e SQL(banco de dados), feito na semana NLW da rocketseat. Essa aplicação tem o objetivo de achar um duo para um tempo de jogatina, você pode até criar uma anúncio com os dias e horários em que você estará disponível.',
        screenshots: [
            {
                id: 1,
                imageUrl: NlwEsportsPoster,
                alternativeText: ''
            },
            {
                id: 2,
                imageUrl: NlwEsportsPublishAnnouncement,
                alternativeText: ''
            },
            {
                id: 3,
                imageUrl: NlwEsportsMobile,
                alternativeText: ''
            },
            {
                id: 4,
                imageUrl: NlwEsportsMobileCards,
                alternativeText: ''
            },
            {
                id: 5,
                imageUrl: NlwEsportsMobileCardDescription,
                alternativeText: ''
            },
        ]
    },
    {
        id: 3,
        poster: NlwLetMeKnowPoster,
        posterText: "Imagem da tela principal do NLW Let me know",
        projectName: 'NLW Let me know',
        description: 'Esta é uma aplicação feita em React(front) e NodeJS(back) utilizando SQL para o banco de dados. É uma feature de feedback que pode ser utilizado em diversos sites, onde o usuário tem a opção de enviar o feedback e que também conta com o botão que pode tirar uma screenshot da tela do usuário para que o dev possa localizar o erro reportado com mais facilidade.',
        screenshots: [
            {
                id: 1,
                imageUrl: NlwLetMeKnowFeatureHome,
                alternativeText: 'Tela inicial de feature'
            },
            {
                id: 2,
                imageUrl: NlwLetMeKnowFeatureTrouble,
                alternativeText: 'uma das opções selecionadas'
            },
            {
                id: 3,
                imageUrl: NlwLetMeKnowFeatureFeedbackSended,
                alternativeText: 'Tela de feedback enviado'
            }
        ]
    },
    {
        id: 4,
        poster: MovieFlixPoster,
        posterText: "Imagem da tela principal do MovieFlix",
        projectName: 'MovieFlix',
        description: 'Esta é uma aplicação foi feita em Angular consumindo a API do TheMovieDB. Fiz esse projeto para práticar componentização em alguns conceitos do Angular. Nessa aplicação o usuário terá uma lista de filmes e series, onde ele pode ver detalhes e informações de um filme/serie, também conta com um campo para pesquisar um filme/serie e paginação.',
        screenshots: [
            {
                id: 1,
                imageUrl: MovieFlixHomePage,
                alternativeText: 'Tela inicial do movieflix'
            },
            {
                id: 2,
                imageUrl: MovieFlixMovieSection,
                alternativeText: 'seção de filmes da aplicação'
            },
            {
                id: 3,
                imageUrl: MovieFlixSearchField,
                alternativeText: 'tela exibindo o campo de pesquisa'
            }
        ]
    },
];