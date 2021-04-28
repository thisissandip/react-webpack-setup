import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const alertThis = () => {
	alert('Hey');
};

const App = () => {
	return (
		<>
			<div onClick={() => alertThis()}>Hello World</div>
			<hr />
			<div>Image:</div>
			<img src={require('./assets/Powai.jpeg')} alt='Image' />
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
