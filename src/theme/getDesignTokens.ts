import { PaletteMode } from '@mui/material';

const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
	},
});

export default getDesignTokens;
