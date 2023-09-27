import React, { Dispatch, SetStateAction, createContext, useCallback, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ReactFCC } from '../../interface/react';
import { User } from './interface';

interface AuthProviderContext {
	user: User | null;
	setUser: Dispatch<SetStateAction<User | null>>;
	isLoadingAuth: boolean;
	logout: () => void;
	isAuthenticated: boolean;
}

const defaultValues = {} as AuthProviderContext;

export const AuthContext = createContext<AuthProviderContext>(defaultValues);

interface AuthProviderProps {}

export const AuthProvider: ReactFCC<AuthProviderProps> = ({ children }) => {
	const auth = getAuth();
	const [user, setUser] = useState<User | null>(null);
	const [isLoadingAuth, setisLoadingAuth] = useState<boolean>(true);
	const isAuthenticated = Boolean(user);

	const logout = useCallback(() => {
		setUser(null);
	}, [setUser]);

	useEffect(() => {
		onAuthStateChanged(
			auth,
			(userData) => {
				if (userData) {
					setUser(userData as any);
				} else {
					setUser(null);
				}
				setisLoadingAuth(false);
			},
			(error) => {
				console.log(error);
				setisLoadingAuth(false);
			}
		);
	});

	const contextValue = React.useMemo(
		() => ({
			user,
			setUser,
			isLoadingAuth,
			logout,
			isAuthenticated,
		}),
		[user, setUser, isLoadingAuth, logout, isAuthenticated]
	);

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
