import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material';
import RenderedRoutes from './routes/RenderedRoutes';
import getDesignTokens from './theme/getDesignTokens';
import useGlobal from './features/Global/useGlobal';

function App() {
	const { theme: mode } = useGlobal();
	const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<RenderedRoutes />
		</ThemeProvider>
	);
}

export default App;
