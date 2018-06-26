const PubSub = require('../helper/pub_sub')

const ResultView = function(){

}

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('WordCounter:inputedWords',(event) => {
    const result = event.detail;
    this.displayResult(result);
  })
}

ResultView.prototype.displayResult = function (result) {
  const resultfield = document.querySelector('#result');
  resultfield.textContent = result;
};

module.exports = ResultView;
