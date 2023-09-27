import React from 'react';
import { ReactFCC } from '../../interface/react';
import Logout from '../../features/auth/components/Logout/Logout';

interface LogoutPageProps {}

const LogoutPage: ReactFCC<LogoutPageProps> = () => {
	return (
		<div data-testid="logout-page-component">
			<Logout />
		</div>
	);
};

export default LogoutPage;
