export interface Slide {
    id: number;
    accentText: string;
    text: string;
    desc: string;
    image: string;
    imageBackground: string;
    buttonLink: string;
    buttonTitle: string;
}

export const slides: Slide[] = [
    {
        id: 1,
        accentText: 'Instant Auto Sales: ',
        text: 'Boost conversion',
        desc: 'Immediately deliver digital products and services to your users.',
        image: '/png/slider/slider-1.png',
        imageBackground: 'pink',
        buttonLink: 'https://help.crypt.bot/crypto-pay-api/',
        buttonTitle: 'Open API Docs'
    },
    {
        id: 2,
        accentText: 'Channels integration: ',
        text: 'Seamless access',
        desc: 'Automatically unlock exclusive content to your users.',
        image: '/png/slider/slider-2.png',
        imageBackground: 'yellow',
        buttonLink: 'https://help.crypt.bot/crypto-pay-api/',
        buttonTitle: 'Open API Docs'
    },
    {
        id: 3,
        accentText: 'Endless customization: ',
        text: 'with Webhooks',
        desc: 'Receive successful payment notifications in real-time. Integrate to any scenario of your service.',
        image: '/png/slider/slider-3.png',
        imageBackground: 'blue',
        buttonLink: 'https://help.crypt.bot/crypto-pay-api/',
        buttonTitle: 'Open API Docs'
    }
]