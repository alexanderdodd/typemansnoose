



export class SentenceManager{
    #wordsDisplayList = [];
    #sentenceCount = 0;

    constructor(){

        this.#wordsDisplayList.push("cheese is a kind of meat ", "wisdom sets boundaries to knowledge ", "cheese bounds knowledge to wisdom ");
    }

    getNextSentence(){
        if(this.#sentenceCount === this.#wordsDisplayList.length){
            this.#sentenceCount=0;
                    }
       let sentence = this.#wordsDisplayList[this.#sentenceCount];
       this.#sentenceCount+=1;
       console.log("in new class " + sentence);
       return sentence;
    }


}