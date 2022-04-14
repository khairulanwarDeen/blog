import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

// ****YOU WILL NEED A CATCH BLOCK TO EVERY REQUEST OF THE event-bus/index.js
// axios.post('http://localhost:4000/events', event).catch((err) => {
//     console.log(err.message);
//   });
//   axios.post('http://localhost:4001/events', event).catch((err) => {
//     console.log(err.message);
//   });
//   axios.post('http://localhost:4002/events', event).catch((err) => {
//     console.log(err.message);
//   });
//   res.send({ status: 'OK' });