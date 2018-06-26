const PubSub = require('../helper/pub_sub');

const InputView = function(){

}
InputView.prototype.bindEvents = function () {

  const input = document.querySelector('#text');

  input.addEventListener('input', (event) => {
    const inputWord = event.target.value;
    PubSub.publish('InputView:inputWord', inputWord);
  })

};

module.exports = InputView;
