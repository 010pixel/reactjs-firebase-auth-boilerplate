import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';
import { AuthProvider } from './features/auth/AuthProvider';
import { GlobalProvider } from './features/Global/GlobalProvider';
import './i18n';

if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
	ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	// <React.StrictMode>
	<BrowserRouter>
		<GlobalProvider>
			<AuthProvider>
				<App />
			</AuthProvider>
		</GlobalProvider>
	</BrowserRouter>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
