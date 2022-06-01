import ReactDOM from "react-dom";
import App from "./App";
import React from 'react';
import './index.css';
import {ContextWrapper} from './context/ContextWrapper';

ReactDOM.render(<ContextWrapper><App/></ContextWrapper>, document.querySelector('#root'));