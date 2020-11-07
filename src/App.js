import React from 'react';
import './App.css';
import {createStructuredSelector} from 'reselect';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutPage from './page/checkout/checkout.component';
import HomePage from './page/homepage/homepage.componet';
import ShopPage from './page/shop/shop.component.jsx';
import Header from './component/header/header.component.jsx';
import SignInAndSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user.selectors';
class App extends React.Component {
	unsubscirbeFormAuth = null;
	
	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscirbeFormAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			}
			setCurrentUser(userAuth);
		});
	}
	componentWillUnmount() {
		this.unsubscirbeFormAuth();
	}
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path='/checkout' component={CheckoutPage}/>
					<Route
						exact
						path="/signin"
						render={() => this.props.currentUser?(<Redirect to="/"/>):(<SignInAndSignUpPage />)}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector  ({
	currentUser: selectCurrentUser
});

const mapDispatchProps = dispatch => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchProps)(App);
