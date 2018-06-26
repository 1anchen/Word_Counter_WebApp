const PubSub = require('../helper/pub_sub');

const WordCounter = function(){

}

WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:inputWord', (event) => {
    const inputedWords = event.detail;
    PubSub.publish('WordCounter:inputedWords', this.countWord(inputedWords));
  });
};


WordCounter.prototype.countWord = function (words) {

  let wordsArray = words.split(' ').filter(word => word !== '');
  return wordsArray.length;

};

module.exports = WordCounter;
