import React, {Component} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import NewsRoom from './pages/NewsRoom';
import About from './pages/About';
import NoPages from './pages/NoPages';

export class App extends Component {
  render() {
    return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<NewsRoom pageSize='8'/>} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    )
  }
}

export default App