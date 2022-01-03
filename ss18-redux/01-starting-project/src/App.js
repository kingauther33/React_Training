import Auth from 'components/Auth';
import Header from 'components/Header';
import { Fragment } from 'react';
import Counter from './components/Counter';
import { useSelector } from 'react-redux';
import UserProfile from 'components/UserProfile';

function App() {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	return (
		<Fragment>
			<Header />
			{isAuthenticated ? <UserProfile /> : <Auth />}
			<Counter />
		</Fragment>
	);
}

export default App;
