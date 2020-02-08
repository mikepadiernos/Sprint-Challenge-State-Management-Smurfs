import React, { useContext, useEffect } from 'react';
import axios from "axios";

// IMPORT CONTEXT: SmurfContext
import SmurfContext from "../context/SmurfContext";

// IMPORT APP COMPONENTS
import { Smurf } from "./Smurf";

export const SmurfList = () => {

	const { smurf, setSmurf } = useContext(SmurfContext);

	useEffect(() => {
			axios
				.get('http://localhost:3333/smurfs')
				.then(response => {
						console.log("Response: ", response.data);
						setSmurf(response.data)
					})
				.catch(error => console.log(error));
	}, []);

	return (
		<section>
			{smurf.map(item => (
				<Smurf
					key={item.id}
					name={item.name}
					age={item.age}
					height={item.height}
				/>
			))}
		</section>
	)

};