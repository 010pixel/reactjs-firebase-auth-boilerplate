interface RouteConfig {
	title: string;
	path: string;
	component: any;
	exact?: boolean;
	layout?: any;
	isPublic?: boolean;
	icon?: any;
}

export default RouteConfig;
