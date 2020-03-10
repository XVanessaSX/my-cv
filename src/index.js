import React from 'react';
import ReactDom from 'react-dom';

import './style.css';
import sayHello from './utils';

const Content = () => (
    <div>
        <h1>CV</h1>
        <p>{sayHello()}</p>
    </div>
    );
ReactDom.render(<Content />, document.getElementById('root'));