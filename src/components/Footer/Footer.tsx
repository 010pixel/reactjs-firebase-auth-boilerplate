import React from 'react';
import { Box, Paper } from '@mui/material';
import { ReactFCC } from '../../interface/react';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

interface FooterProps {}

const Footer: ReactFCC<FooterProps> = () => {
	return (
		<footer data-testid="footer-component">
			<Box>
				<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, m: { xs: 0, sm: 2 } }} elevation={3}>
					<Box display="flex" justifyContent="center">
						<ThemeSwitcher />
					</Box>
				</Paper>
			</Box>
		</footer>
	);
};

export default Footer;
