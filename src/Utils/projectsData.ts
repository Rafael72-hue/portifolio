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

export const PROJECT_DATA = [
    {
        id: 1,
        poster: CalculadoraPoster,
        posterText: "Imagem de uma calculadora",
        projectName: 'Calculadora',
        description: '',
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
        description: '',
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
        description: '',
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
];