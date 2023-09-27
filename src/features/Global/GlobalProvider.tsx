import React, { Dispatch, SetStateAction, createContext, useState } from 'react';
import { ReactFCC } from '../../interface/react';
import { ThemeType } from './interface';

interface GlobalProviderContext {
	theme: ThemeType;
	setTheme: Dispatch<SetStateAction<ThemeType>>;
}

const defaultValues = {} as GlobalProviderContext;

export const GlobalContext = createContext<GlobalProviderContext>(defaultValues);

interface GlobalProviderProps {}

export const GlobalProvider: ReactFCC<GlobalProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<ThemeType>(ThemeType.LIGHT);

	const contextValue = React.useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme, setTheme]
	);

	return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
