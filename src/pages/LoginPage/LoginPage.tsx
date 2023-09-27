import React from 'react';
import { ReactFCC } from '../../interface/react';
import Login from '../../features/auth/components/Login/Login';

interface LoginPageProps {}

const LoginPage: ReactFCC<LoginPageProps> = () => {
	return (
		<div data-testid="login-page-component">
			<Login />
		</div>
	);
};

export default LoginPage;
