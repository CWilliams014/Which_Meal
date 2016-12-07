import React from 'react';
import CalculateComparison from './CalculateComparison'
import ClearFields from './ClearFields'

const ButtonsWrapper = () => {

	return (
		<div role="group" className="buttons btn-group-lg">
			<CalculateComparison />
			<ClearFields />
		</div>
	);
};

export default ButtonsWrapper