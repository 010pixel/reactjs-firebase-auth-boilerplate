import { useContext } from 'react';
import { GlobalContext } from './GlobalProvider';

const useGlobal = () => {
	const context = useContext(GlobalContext);
	if (!context) {
		throw new Error('useGlobal must be used within an GlobalProvider');
	}
	return context;
};

export default useGlobal;
