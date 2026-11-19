import logo from './logo.svg';
import './App.css';

import Header from './layout/Header.js';
import Main from './layout/Main.js';
import Footer from './layout/Footer.js';

function App()
{
	return (
		<div className="App">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
