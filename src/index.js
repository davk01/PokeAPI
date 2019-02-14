import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';



const Rend = () => {
    return (
            <div>
                <App/>
            </div>
    )
}

ReactDOM.render(<Rend/>, document.getElementById('root'));


