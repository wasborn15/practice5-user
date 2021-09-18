import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { getTests, selectTests } from '../store/testsSlice';
import withReducer from '../../store/withReducer';
import reducer from '../store';

function Tests(props) {
	const dispatch = useDispatch();
	const tests = useSelector(selectTests);

	useEffect(() => {
		dispatch(getTests());
	}, []);

	return (
		<>
			{tests.map(item => (
				<p key={item.id}>タイトル：{item.title}</p>
			))}
			<Button>Button</Button>
		</>
	);
}

export default withReducer('practice5', reducer)(Tests);
// export default Tests;
