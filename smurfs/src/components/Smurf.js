import React from 'react';

export const Smurf = ({name, age, height}) => {

	return (
		<article className="card card-smurf">
			<div className="card-header">
				<h3>
					{name}
				</h3>
			</div>
			<div className="card-body">
				<ul>
					<li>
						<span>Age:</span>
						{age}
					</li>
					<li>
						<span>Height:</span>
						{height}
					</li>
				</ul>
			</div>
		</article>
	);

};