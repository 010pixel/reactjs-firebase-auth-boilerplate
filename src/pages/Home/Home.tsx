import React, { useEffect } from 'react';
import { ReactFCC } from '../../interface/react';
import { trackPageView } from '../../common/ga4';

interface HomeProps {}

const Home: ReactFCC<HomeProps> = () => {
	useEffect(() => {
		trackPageView();
	}, []);
	return (
		<div data-testid="home-component">
			<h1>Public Home Page</h1>
		</div>
	);
};

export default Home;
