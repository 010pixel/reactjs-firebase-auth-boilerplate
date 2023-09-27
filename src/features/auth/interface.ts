interface UserProviderInfo {
	uid: string;
	displayName: string | null;
	email: string | null;
	phoneNumber: string | null;
	photoURL: string | null;
	providerId: string;
}

export interface User {
	uid: string;
	displayName: string | null;
	email: string | null;
	emailVerified: boolean;
	phoneNumber: string | null;
	photoURL: string | null;
	isAnonymous: boolean;
	providerData: UserProviderInfo[];
	tenantId: string | null;
	metadata: {
		lastSignInTime: string;
		creationTime: string;
	};
	stsTokenManager: {
		refreshToken: string;
		accessToken: string;
		expirationTime: number;
	};
	createdAt: string;
	lastLoginAt: string;
	appName: string;
}
