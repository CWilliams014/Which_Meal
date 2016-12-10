import React from 'react';
import CalculateComparison from './CalculateComparison'
import ClearFields from './ClearFields'

const ButtonsWrapper = (props) => {
	const {clear, compare} = props
	return (
		<div role="group" className="buttons btn-group-lg">
			<CalculateComparison compare={compare} />
			<ClearFields clear={clear} />
		</div>
	);
};

export default ButtonsWrapper
