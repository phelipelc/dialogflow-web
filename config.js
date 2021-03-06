export default {
    app: {
        token: "c11bca43739848fcbba09d24d5ef9b4f", // <- enter your token here
        muted: true, // <- mute microphone by default
        watermark: true // <- show watermark
    },
    locale: {
        strings: {
            welcomeTitle: "Bem vindo ao boot",
            welcomeDescription: `You can type "Hello" for example. Or just press on the microphone to talk`,
            offlineTitle: "Oh, no!",
            offlineDescription: "It looks like you are not connected to the internet, this webpage requires internet connection, to process your requests",
            queryTitle: "Me pergunta algo...",
            voiceTitle: "Go ahead, im listening..."
        },
        settings: {
            speechLang: "pt-BR", // <- output language
            recognitionLang: "pt-BR" // <- input(recognition) language
        }
    }
}
