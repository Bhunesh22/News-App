import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 9;
  render() {
    return (
      <>
      <Router>
      
      <Navbar/>
      <Routes>
      <Route exact strict path="/" element={<News key="general" pageSize={this.pageSize} country="in" category="general"/>} />
      <Route exact strict path="/business" element={<News key="business" pageSize={this.pageSize} country="in" category="business"/>} />
      <Route exact strict path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>} />
      <Route exact strict path="/general" element={<News key="general" pageSize={this.pageSize} country="in" category="general"/>} />
      <Route exact strict path="/health" element={<News key="health" pageSize={this.pageSize} country="in" category="health"/>} />
      <Route exact strict path="/science" element={<News key="science" pageSize={this.pageSize} country="in" category="science"/>} />
      <Route exact strict path="/sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports"/>} />
      <Route exact strict path="/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology"/>} />
      
      </Routes>
      </Router>
      </>
    )
  }
}
    
