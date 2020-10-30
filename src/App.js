import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './page/homepage/homepage.componet';
import ShopPage from './page/shop/shop.component.jsx';

function App () {
	return (
		<div>
			<Route exact path='/' component={HomePage} />
			<Route path='/shop' component={ShopPage}/>
		</div>
	);
}

export default App;
