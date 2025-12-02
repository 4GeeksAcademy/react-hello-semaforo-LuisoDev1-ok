import React from "react";
import { useState } from "react";

const TrafficLight = () => {

	const [color, setColor] = useState("red");
	const [isPurpleOn, setIsPurpleOn] = useState(false);

	return <div className="container-fluid mt-4 p-4">
		<div className="container-fluid bg-dark" style={{ width: "10px", height: "60px" }}> </div>
		<div className="container-fluid bg-dark p-4 d-flex justify-content-center " style={{ width: "80px", height: "auto", borderRadius:"10px" }}>
			<div class="d-flex align-items justify-content-center flex-column m-0 p-0" role="group" aria-label="Basic mixed styles example">
				<button onClick={() => setColor("red")} type="button" class={"btn btn-danger mb-3 rounded-circle " + (color == "red" ? "onred" : "")} style={{ width: "40px", height: "40px" }}></button>
				<button onClick={() => setColor("yellow")} type="button" class={"btn btn-warning mb-3 rounded-circle " + (color == "yellow" ? "onyellow" : "")} style={{ width: "40px", height: "40px" }}></button>
				<button onClick={() => setColor("green")} type="button" class={"btn btn-success mb-3 rounded-circle " + (color == "green" ? "ongreen" : "")} style={{ width: "40px", height: "40px" }}></button>
				{isPurpleOn && <button onClick={() => setColor("purple")} type="button" class={"btn btn-purple mb-3 rounded-circle " + (color == "purple" ? "onpurple" : "")} style={{ width: "40px", height: "40px" }}></button>}
			</div>
		</div>
		<div class="mt-5 container-fluid" role="group" aria-label="Basic mixed styles example">
			<button onClick={() => setIsPurpleOn(true)} type="button" class="btn btn-primary btn-lg">Agregar</button>
		</div>
	</div>
};

export default TrafficLight;