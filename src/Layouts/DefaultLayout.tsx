import React from 'react';
import { Container, Paper } from '@mui/material';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { ReactFCC } from '../interface/react';

interface DefaultLayoutProps {}

const DefaultLayout: ReactFCC<DefaultLayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<Container sx={{ px: { xs: 0, sm: 2 }, pt: { xs: 1, sm: 0 }, pb: { xs: 10, sm: 10 } }}>
				<Paper sx={{ p: 1 }}>
					<main>{children}</main>
				</Paper>
			</Container>
			<Footer />
		</>
	);
};

export default DefaultLayout;
