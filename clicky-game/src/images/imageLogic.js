import React from "react";
import "./Images.css";

const Images = props => (
	<button onClick={() => props.setSelected(props.id)}>
		<img id={props.id} alt={props.name} src={props.image} data-select={props.selected} />
	</button>
	
);

export default Images;