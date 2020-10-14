import React from "react";
import ReactDOM from "react-dom";

export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			shine: ""
		};
	}
	render() {
		var select1 = "";
		var select2 = "";
		var select3 = "";
		if (this.state.shine == "red") {
			select1 = "selected";
		} else if (this.state.shine == "yellow") {
			select2 = "selected";
		} else if (this.state.shine == "green") {
			select3 = "selected";
		}

		return (
			<div className="container">
				<div className="palo" />
				<div className="traffic">
					<div
						className={"select1 " + select1}
						onClick={() =>
							this.setState({
								shine: "red"
							})
						}
					/>
					<div
						className={"select2 " + select2}
						onClick={() =>
							this.setState({
								shine: "yellow"
							})
						}
					/>
					<div
						className={"select3 " + select3}
						onClick={() =>
							this.setState({
								shine: "green"
							})
						}
					/>
				</div>
			</div>
		);
	}
}
