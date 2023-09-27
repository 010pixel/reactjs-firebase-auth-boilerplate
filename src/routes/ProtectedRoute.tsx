import React from 'react';
import { Navigate } from 'react-router-dom';
import { ReactFCC } from '../interface/react';
import useAuth from '../features/auth/useAuth';

interface ProtectedRouteProps {
	isPublic?: boolean;
}

const ProtectedRoute: ReactFCC<ProtectedRouteProps> = (props) => {
	const { isAuthenticated, isLoadingAuth } = useAuth();
	const { isPublic, children } = props;

	// keeping it on top to avoid showing loading screen for public routes
	if (isPublic) {
		return <div>{children}</div>;
	}

	if (isLoadingAuth) {
		return <div>Loading Auth...</div>;
	}

	if (!isAuthenticated) {
		return <Navigate to="/login" />;
	}

	return <div>{children}</div>;
};

export default ProtectedRoute;
