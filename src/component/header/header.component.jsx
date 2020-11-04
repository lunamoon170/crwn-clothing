import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
	<div className="header">
		<Link clasname="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/shop">
				CONTACT
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					SignOut
				</div>
			) : (
				<Link className="option" to="/signin">
					SignIn
				</Link>
			)}
		</div>
	</div>
);

const mapStateToProps =state=>({
	currentUser : state.user.currentUser
});
export default connect(mapStateToProps)(Header);
