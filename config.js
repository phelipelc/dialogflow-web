export default {
    app: {
        token: "7e4923aacf2b4e8181138517df018256", // <- enter your token here
        muted: true, // <- mute microphone by default
        watermark: true // <- show watermark
    },
    locale: {
        strings: {
            welcomeTitle: "Hello, ask something to get started",
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
