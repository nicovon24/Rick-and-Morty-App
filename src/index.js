import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {DataProvider} from './context';
import {Provider} from "react-redux"
import store from "./redux/store.js"
import './index.css'
import App from './App'

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
          <DataProvider>
            <App />
          </DataProvider>
        </BrowserRouter>
    </Provider>
);
