import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// react router dom kya h... aur usse kya hota h??
// ye niche kya import hua??
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App () {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element = { <News key="top" country="in" catogary="top" /> }/>
            <Route exact path="/politics" element = { <News key="politics" country="in" catogary="politics" /> }/>
            <Route exact path="/entertainment" element = { <News key="entertainment" country="in" catogary="entertainment" /> }/>
            <Route exact path="/sports" element = { <News key="sports" country="in" catogary="sports" /> }/>
            <Route exact path="/business" element = { <News key="business" country="in" catogary="business" /> }/>
            <Route exact path="/technology" element = { <News key="technology" country="in" catogary="technology" /> }/>
            <Route exact path="/food" element = { <News key="food" country="in" catogary="food" /> }/>
            <Route exact path="/health" element = { <News key="health"  country="in" catogary="health" /> }/>
            <Route exact path="/environment" element = { <News key="environment" country="in" catogary="environment" /> }/>
            <Route exact path="/science" element = { <News key="science"  country="in" catogary="science" /> }/>
          </Routes>
        </Router>
      </div>
    )
}