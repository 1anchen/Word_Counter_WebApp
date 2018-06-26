const InputView = require('./views/input_views');
const WordCounter = require('./models/word_counter');
const ResultView = require('./views/result_views');

document.addEventListener('DOMContentLoaded', ()=>{
  console.log('loaded');

  const inputView = new InputView();
  inputView.bindEvents();

  const wordCounter = new WordCounter();
  wordCounter.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
})
