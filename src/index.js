import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Especies } from './components/Especies';
import IncTop from './components/IncTop';
import { AppRouter } from './routers/AppRouter';



ReactDOM.render(
    <AppRouter />,
  document.getElementById('root')
);


//    <Especies />,