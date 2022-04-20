import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoSomething from './js/ticker-api.js';


$('#crypto-button').click(function () {
  let promise = CryptoSomething.getPrices();
  promise.then(function(response) {
    const body = JSON.parse(response);
    // let info = body.data
    console.log(body);
    
  });
});