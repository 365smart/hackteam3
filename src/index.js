import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import data from './data.json';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
data.users = getRandomInt(5, 10);
data.points = getRandomInt(100, 1000) * 10;
sessionStorage.setItem('player_score', data.points);

ReactDOM.render(<App {...data} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
