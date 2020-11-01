import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import HomePage from './page/homepage/homepage.componet';
import ShopPage from './page/shop/shop.component.jsx';
import Header from './component/header/header.component.jsx';
import SignInAndSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import {auth } from './firebase/firebase.utils';
class App extends React.Component{
	constructor(){
		super();
		this.state ={
			currentUser:null
		}
	}
	unsubscirbeFormAuth =null;
	componentDidMount(){
		this.unsubscirbeFormAuth=auth.onAuthStateChanged(user=>{
			this.setState({ currentUser:user});
			console.log(user);
		});
	}
	componentWillUnmount(){
		this.unsubscirbeFormAuth();
	}
	render(){
		return(
		<div>
		<Header currentUser={this.state.currentUser}/>
		<Switch>
			<Route exact path='/' component={HomePage} />
			<Route path='/shop' component={ShopPage}/>
			<Route path='/signin' component={SignInAndSignUpPage}/>
		</Switch>
		</div>
	);
	}
}
	
export default App;
