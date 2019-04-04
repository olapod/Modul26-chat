import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App/>,document.getElementById('app'));

var input = document.querySelectorAll('input');
for(var i=0; i<input.length; i++){
    input[i].setAttribute('size',input[i].getAttribute('placeholder').length);
}