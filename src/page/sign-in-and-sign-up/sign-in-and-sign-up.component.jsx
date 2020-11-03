import React from 'react';
import Signin from '../../component/sign-in/sign-in.component';
import Singup from '../../component/sign-up/sign-up.component';
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
	<div className="sign-in-and-sign-up">
		<Signin />
		<Singup />
	</div>
);

export default SignInAndSignUpPage;
