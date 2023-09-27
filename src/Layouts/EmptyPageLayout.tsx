import React from 'react';
import { ReactFCC } from '../interface/react';
import Header from '../components/Header/Header';

interface EmptyPageLayoutProps {}

const EmptyPageLayout: ReactFCC<EmptyPageLayoutProps> = ({ children }) => {
	return (
		<main>
			<Header />
			{children}
		</main>
	);
};

export default EmptyPageLayout;
