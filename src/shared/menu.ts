import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

interface Page {
	title: string;
	icon: any;
	path: string;
}

export const pages: Page[] = [
	{ title: 'Home', icon: HomeIcon, path: '/' },
	{ title: 'Me', icon: 'avatar', path: '/me' },
];

export const settings: Page[] = [
	{ title: 'Profile', icon: AccountCircleIcon, path: '/me' },
	{ title: 'Logout', icon: LogoutIcon, path: '/logout' },
];

export default { pages, settings };
