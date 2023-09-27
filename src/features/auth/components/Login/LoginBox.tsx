import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import { ReactFCC } from '../../../../interface/react';
import { auth } from '../../service/firebase';

interface LoginBoxProps {}

const LoginBox: ReactFCC<LoginBoxProps> = () => {
	useEffect(() => {
		const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

		// eslint-disable-next-line
		const signInSuccessWithAuthResult = (authResult: any, redirectUrl: string) => {};

		const uiShown = () => {
			// This is what should happen when the form is full loaded. In this example, I hide the loader element.
			document.getElementById('loader')!.style.display = 'none';
		};

		const privacyPolicyUrl = () => {
			// URL to your privacy policy
			window.location.assign('https://www.example.com/privacy-policy');
		};

		ui.start('#firebaseui-auth-container', {
			callbacks: {
				signInSuccessWithAuthResult,
				uiShown,
			},
			signInSuccessUrl: 'https://www.anyurl.com', // This is where should redirect if the sign in is successful.
			signInOptions: [
				// This array contains all the ways an user can authenticate in your application. For this example, is only by email.
				{
					provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
					requireDisplayName: true,
					disableSignUp: {
						status: true,
					},
				},
				firebase.auth.GoogleAuthProvider.PROVIDER_ID,
				firebase.auth.FacebookAuthProvider.PROVIDER_ID,
				firebase.auth.TwitterAuthProvider.PROVIDER_ID,
				firebase.auth.GithubAuthProvider.PROVIDER_ID,
			],
			tosUrl: 'https://www.example.com/terms-conditions', // URL to you terms and conditions.
			privacyPolicyUrl,
		} as any);
	}, []);

	return (
		<div data-testid="login-box-component">
			<div id="firebaseui-auth-container" />
			<div id="loader">Loading...</div>
		</div>
	);
};

export default LoginBox;
