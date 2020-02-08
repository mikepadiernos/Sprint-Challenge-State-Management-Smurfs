import React, { useState, useContext } from "react";
import axios from "axios";

// IMPORT CONTEXT: SmurfContext
import SmurfContext from "../context/SmurfContext";

export default function SmurfForm() {

	const { smurf, setSmurf } = useContext(SmurfContext);

	const [ formData, setFormData ] = useState({
		// id: Math.floor((Math.random() * 50) + 1),
		name: "",
		age: "",
		height: ""
	});

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const onSubmit = e => {
		e.preventDefault();
		axios
			.post("http://localhost:3333/smurfs", formData)
			.then(response => setSmurf([...smurf, response.data]))
			.catch(error => console.log(error));
	};

	return (
		<section className="form form-smurf">
			<form onSubmit={onSubmit}>
				<label htmlFor="name">Name</label><br />
				<input
					name="name"
					type="text"
					onChange={handleChange}
					value={formData.name}
				/><br />
				<label htmlFor="age">Age</label><br />
				<input
					name="age"
					type="text"
					onChange={handleChange}
					value={formData.age}
				/><br />
				<label htmlFor="height">Height</label><br />
				<input
					name="height"
					type="text"
					onChange={handleChange}
					value={formData.height}
				/><br />
				<button type="submit">SUBMIT</button>
			</form>
		</section>
	)

}
