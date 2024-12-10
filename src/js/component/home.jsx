import React from "react";
import { Navbar } from "./navbar.jsx";
import { Body } from "./body.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";




const Home = () => {
	return (<>
        <div className="about-us">
			<Navbar/>
			<Body />

		</div>
	
	</>);
		
};

export default Home;
