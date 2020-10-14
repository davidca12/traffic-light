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
				<div className="stick" />
				<div className="traffic">
					<div
						className={"redTraffic " + select1}
						onClick={() =>
							this.setState({
								shine: "red"
							})
						}
					/>
					<div
						className={"yellowTraffic " + select2}
						onClick={() =>
							this.setState({
								shine: "yellow"
							})
						}
					/>
					<div
						className={"greenTraffic " + select3}
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
