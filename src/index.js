import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const alertThis = () => {
	alert('Hey');
};

const App = () => {
	return (
		<>
			<div className='hello' onClick={() => alertThis()}>
				Hey, there! You Made It!
			</div>
			<div>As a prize, enjoy this view.</div>
			<img src={require('./assets/Powai.jpeg')} alt='Image' />
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
