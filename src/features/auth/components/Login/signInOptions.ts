import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';

const signInOptions: { [key: string]: any } = {
	email: {
		provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
		requireDisplayName: true,
		disableSignUp: {
			status: false,
		},
	},
	google: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
	facebook: {
		provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
		scopes: ['public_profile', 'email', 'user_likes', 'user_friends'],
	},
	twitter: firebase.auth.TwitterAuthProvider.PROVIDER_ID,
	github: firebase.auth.GithubAuthProvider.PROVIDER_ID,
	phone: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
	microsoft: {
		provider: 'microsoft.com',
		loginHintKey: 'login_hint',
	},
	apple: {
		provider: 'apple.com',
	},
	anonymous: firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
};

export const selectedSignInOptions = process.env.REACT_APP_FIREBASE_SIGN_IN_OPTIONS
	? process.env.REACT_APP_FIREBASE_SIGN_IN_OPTIONS.split(',')
			.filter((signInOption: string) => {
				return signInOption && signInOption.trim();
			})
			.map((signInOption: string) => {
				return signInOptions[signInOption.trim()];
			})
	: Object.values(signInOptions);

export default signInOptions;
