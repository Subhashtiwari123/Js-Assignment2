// As a web developer, your task is to build a fu=ctio= that exami=es a se=te=ce a=d cou=ts how ma=y times
// each u=ique word appears i= it. Usi=9 a ~ap, the fu=ctio= efficie=tly keeps track of the occurre=ce of each
// word i= the se=te=ce.

function wordCounter(sentence) {
    const wordFrequencyMap = new Map();

    const words = sentence.split(/\s+/); // Split the sentence into words using whitespace as separator

    for (const word of words) {
        const cleanWord = word.toLowerCase().replace(',', ''); // Remove non-alphanumeric characters and convert to lowercase

        if (cleanWord.length > 0) {
            wordFrequencyMap.set(cleanWord, (wordFrequencyMap.get(cleanWord) || 0) + 1);
        }
    }

    return wordFrequencyMap;
}

const sentence = "please please submit your assignment on time, your assignments are important ";
const result = wordCounter(sentence);

console.log(result);