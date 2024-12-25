import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import NewsRoom from './pages/NewsRoom';
import About from './pages/About';
import NoPages from './pages/NoPages';

const App = () =>{
  const apiKey = import.meta.env.VITE_APP_NEWS_API;
    return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<NewsRoom pageSize={12} apiKey={apiKey} category="general"  country="us" />} />
            <Route exact path="developer" element={<About key='about' />} />
            <Route exact path="bussiness" element={<NewsRoom key='bussiness' pageSize={12} apiKey={apiKey} category="bussiness"  country="us" />} />
            <Route exact path="entertainment" element={<NewsRoom key='entertainment' pageSize={12} apiKey={apiKey} category="entertainment"  country="us" />} />
            <Route exact path="general" element={<NewsRoom key='general' pageSize={12} apiKey={apiKey} category="general"  country="us" />} />
            <Route exact path="science" element={<NewsRoom key='science' pageSize={12} apiKey={apiKey} category="science"  country="us" />} />
            <Route exact path="health" element={<NewsRoom key='health' pageSize={12} apiKey={apiKey} category="health"  country="us" />} />
            <Route exact path="sports" element={<NewsRoom key='sports' pageSize={12} apiKey={apiKey} category="sports"  country="us" />} />
            <Route exact path="technology" element={<NewsRoom key='technology' pageSize={12} apiKey={apiKey} category="technology"  country="us" />} />
            <Route path="*" element={<NoPages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    )
}

export default App