import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import DefaultLayout from '../Layouts/DefaultLayout';
import ProtectedRoute from './ProtectedRoute';
import RouteConfig from './interface';

const renderRoutes = (mainRoutes: RouteConfig[]) => {
	const Routes = () => {
		const layouts = mainRoutes.map(({ layout: Layout, component, path, isPublic }: RouteConfig) => {
			Layout = Layout || DefaultLayout;
			return (
				<Route
					path={path}
					key={path}
					element={
						<ProtectedRoute isPublic={isPublic}>
							<Layout>{component}</Layout>
						</ProtectedRoute>
					}
				/>
			);
		});
		const notFound = (
			<Route
				path="*"
				key="not-found"
				element={
					<ProtectedRoute isPublic>
						<DefaultLayout>
							<div>
								<h1>404: page not found</h1>
							</div>
						</DefaultLayout>
					</ProtectedRoute>
				}
			/>
		);
		return (
			<ReactRoutes>
				{layouts}
				{notFound}
			</ReactRoutes>
		);
	};
	return Routes;
};

export default renderRoutes;
