import './App.css';
import React,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Sidebar from './Components/Sidebar';
import Home from './Home';
import Layout from './Layout';

function App() {

  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;


