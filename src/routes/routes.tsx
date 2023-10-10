import React from 'react';
import Home from '../pages/Home/Home';
import RouteConfig from './interface';
import renderRoutes from './utils';
import EmptyPageLayout from '../Layouts/EmptyPageLayout';
import DefaultLayout from '../Layouts/DefaultLayout';
import LoginPage from '../pages/LoginPage/LoginPage';
import LogoutPage from '../pages/LogoutPage/LogoutPage';

const routes: RouteConfig[] = [
	{
		title: 'Home',
		path: '/',
		component: <Home />,
		layout: DefaultLayout,
		exact: true,
		isPublic: true,
	},
	{
		title: 'Login',
		path: '/login',
		component: <LoginPage />,
		layout: EmptyPageLayout,
		exact: true,
		isPublic: true,
	},
	{
		title: 'Logout',
		path: '/logout',
		component: <LogoutPage />,
		layout: DefaultLayout,
		exact: true,
		isPublic: true,
	},
	{
		title: 'Profile',
		path: '/me',
		component: (
			<div>
				<h1>Protected Profile Page</h1>
			</div>
		),
		layout: DefaultLayout,
		exact: true,
		isPublic: false,
	},
];

export const Routes = renderRoutes(routes);

export default routes;
