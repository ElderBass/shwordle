import React from 'react';
import ReactDOM from 'react-dom';
import { GameProvider } from './store/GameState';
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <GameProvider>
            <App />
        </GameProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
