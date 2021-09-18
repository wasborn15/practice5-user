import { Provider } from 'react-redux';
import Tests from './app/main/tests/Tests';
import store from './app/store';

const App = () => (
	<Provider store={store}>
		<Tests />
	</Provider>
);

export default App;
