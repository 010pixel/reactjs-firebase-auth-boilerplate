import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	AppBar,
	Avatar,
	Box,
	Button,
	Container,
	IconButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { ReactFCC } from '../../interface/react';
import { pages, settings } from '../../shared/menu';
import useAuth from '../../features/auth/useAuth';

interface HeaderProps {}

const Header: ReactFCC<HeaderProps> = () => {
	const { user, isAuthenticated, isLoadingAuth } = useAuth();
	const navigate = useNavigate();
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

	const gotoPage = (path: string) => {
		navigate(path);
	};

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const onMenuItemClick = (path: string) => {
		navigate(path);
		handleCloseUserMenu();
	};

	const avatarWithMenu = (
		<>
			<IconButton sx={{ p: 0, ml: 2 }} onClick={handleOpenUserMenu}>
				<Avatar
					alt={user?.displayName || user?.email || 'User'}
					src={user?.photoURL || 'https://mui.com/static/images/avatar/2.jpg'}
				/>
			</IconButton>

			<Menu
				sx={{ mt: '45px' }}
				id="menu-appbar"
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				{settings.map((setting) => {
					const SettingIcon = setting.icon;
					return (
						<MenuItem key={setting.path} onClick={() => onMenuItemClick(setting.path)}>
							<ListItemIcon sx={{ color: 'success' }}>
								<Avatar sx={{ width: 24, height: 24 }}>
									<SettingIcon sx={{ width: 20, height: 20 }} />
								</Avatar>
							</ListItemIcon>
							<ListItemText>
								<Typography variant="subtitle2" textAlign="center">
									{setting.title}
								</Typography>
							</ListItemText>
						</MenuItem>
					);
				})}
			</Menu>
		</>
	);

	return (
		<Container sx={{ p: { xs: 0, sm: 2 } }}>
			<AppBar
				position="sticky"
				color="primary"
				sx={{
					borderRadius: {
						xs: 0,
						sm: 2,
					},
				}}
			>
				<Toolbar>
					<Box sx={{ flexGrow: 1 }}>
						<Button sx={{ ml: -1, color: 'white', display: 'block' }} onClick={() => gotoPage('/')}>
							<Typography variant="inherit" color="inherit" noWrap>
								React Firebase Auth Template
							</Typography>
						</Button>
					</Box>

					{isLoadingAuth ? (
						<Typography variant="overline" color="inherit" noWrap>
							Loading...
						</Typography>
					) : (
						<>
							<Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
								{pages.map((page) => (
									<Button
										key={page.title}
										size="small"
										sx={{ my: 0, color: 'white', display: 'block' }}
										onClick={() => gotoPage(page.path)}
									>
										{page.title}
									</Button>
								))}
							</Box>
							<Box sx={{ flexGrow: 0 }}>
								{isAuthenticated ? (
									avatarWithMenu
								) : (
									<Button
										size="small"
										variant="outlined"
										startIcon={<PersonIcon />}
										onClick={() => gotoPage('/login')}
										sx={{ ml: 2, color: 'white', borderColor: 'white' }}
										disabled={isLoadingAuth}
									>
										Login
									</Button>
								)}
							</Box>
						</>
					)}
				</Toolbar>
			</AppBar>
		</Container>
	);
};

export default Header;
