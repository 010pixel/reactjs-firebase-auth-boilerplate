import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactFCC } from '../../../../interface/react';
import { auth } from '../../service/firebase';

interface LoginProps {}

const Logout: ReactFCC<LoginProps> = () => {
	const navigate = useNavigate();

	useEffect(() => {
		auth.signOut();
		navigate('/');
	}, [navigate]);

	return (
		<div data-testid="logout-component">
			<div id="firebaseui-auth-container" />
			<div id="loader">Loading...</div>
		</div>
	);
};

export default Logout;
