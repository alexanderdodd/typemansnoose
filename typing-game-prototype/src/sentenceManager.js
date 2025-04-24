import words from './randomWords.json'

export class SentenceManager {
    #wordsDisplayList = [];
    #sentenceCount = 0;
    #wordsPerSentence = 10;
    #sentencesPerRun = 6;

    constructor() {
        this.#generateSentencesOfRandomWordsFromFile();
    }

    getNextSentence() {
        if (this.#sentenceCount === this.#wordsDisplayList.length) {
            this.#sentenceCount = 0;
        }
        const sentence = this.#wordsDisplayList[this.#sentenceCount];
        this.#sentenceCount += 1;
        return sentence;
    }

    #generateSentencesOfRandomWordsFromFile() {
        const keys = Object.keys(words);
        const randomWordCollection = keys[this.#generateRandomNumber(keys.length)];
        let wordString = words[randomWordCollection];
        wordString = wordString.replace("-", " ");
        const splitBySpace = wordString.split(" ");
        const sanitisedWords = this.#getWordsAsSanitisedWordArray(splitBySpace);
        this.#generateSentencesWithRandomWords(sanitisedWords);


    }

    #getWordsAsSanitisedWordArray(splitBySpace) {
        const sanitisedWords = [];
        for (let i = 0; i < splitBySpace.length; i++) {
            let sanitisedWord = splitBySpace[i].replace(/[.,\/#!@?$£%^&*1234567890;\[\]:{}=\-_`~()]/g, "");
            if (/^[a-zA-Z ]+$/.test(sanitisedWord)) {
                sanitisedWords.push(sanitisedWord.toLowerCase() + " "); //add space
            }
        }
        return sanitisedWords;
    }

    #generateSentencesWithRandomWords(wordArray) {
        for (let i = 0; i < this.#sentencesPerRun; i++) {
            let sentence = "";
            let wordToCheck = undefined;
            let wordToAdd = undefined;

            for (let i = 0; i < this.#wordsPerSentence; i++) {
                wordToAdd = wordArray[this.#generateRandomNumber(wordArray.length)];
                
                while(wordToCheck === wordToAdd){ // ensure that contiguous words are different
                    wordToAdd = wordArray[this.#generateRandomNumber(wordArray.length)];
                }
                wordToCheck= wordToAdd;
                sentence += wordToAdd;
            }
            this.#wordsDisplayList.push(sentence);
        }
    }


    /**
     * get a positive integer from 0 to max
     * @param max
     * @returns {number}
     */
    #generateRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }
}