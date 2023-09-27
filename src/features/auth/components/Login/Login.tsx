import React from 'react';
import { ReactFCC } from '../../../../interface/react';
import useAuth from '../../useAuth';
import LoginBox from './LoginBox';

interface LoginProps {}

const Login: ReactFCC<LoginProps> = () => {
	const { user, isLoadingAuth } = useAuth();

	if (isLoadingAuth) {
		return <div style={{ textAlign: 'center' }}>Loading Auth...</div>;
	}

	return <div data-testid="login-component">{user ? <div>Logged in as {user?.displayName}</div> : <LoginBox />}</div>;
};

export default Login;
