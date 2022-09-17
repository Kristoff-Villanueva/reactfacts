import React from "react";
// import reactIcon from "./reactIcon.png";

export default function Navbar() {
	return (
		<div id="navBarDiv">
			<div id="titleDiv">
				<img src={require("../images/reactIcon.png")} alt="" />
				<h2>ReactFacts</h2>
			</div>
			<h2>React Course - Project 1</h2>
		</div>
	);
}
