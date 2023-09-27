import ReactGA from 'react-ga4';

export const trackPageView = () => {
	ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

export const trackEvent = (options: any) => {
	const { eventName, eventCategory, eventAction, eventLabel, value, items } = options;
	console.log('event', eventName, {
		eventCategory,
		eventAction,
		eventLabel,
		value,
		items,
	});
	ReactGA.gtag('event', eventName, {
		eventCategory,
		eventAction,
		eventLabel,
		value,
		items,
	});
};
