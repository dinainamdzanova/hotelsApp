import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import Search from './views/search';
import Hotel from './views/hotel';
import Hotels from './views/hotels';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
        <Route exact path="/" element={<div className='body'>
          <Search />
        </div>} />
				<Route exact path="/hotel" element={<Hotel />} />
				<Route exact path="/hotels/:destainationId" element={<Hotels />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;