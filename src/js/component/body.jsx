import React from "react";
import { DeveloperCard } from "./developer-card.jsx";






const img1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNK4QpvBs_NMkpoOZpY_ug1Fd646sgyoznQ&s'
const img2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzpw-p12tLtwjIzMGUTA-u1vxWpzK1DIx_ow&s'
const img3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6dNq9tuka9IvP1Hs2Uz1NOH54lQqiZCOVjA&s'
const img4 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hb5xzFZJCTW4cMqmPwsgfw-gILUV7QevvQ&s'

export const Body = () => {
	return (<>
	    <div className="about-us__body">
			<h2>we bring a wealth of skills and experience from a wide range of backgrounds</h2>
			<p>Nuestra filosofía es simple: contratar personas excelentes y brindarles los recursos y el apoyo para que hagan su mejor trabajo</p>
			<div className="about-us__developer-list">
			  <DeveloperCard developerName='Jessica deobrev' developerTitle= 'Backend Lead'image={img1}/>
			  <DeveloperCard developerName='Drew Cano' developerTitle= 'Head of Us'image={img2}/>
				<DeveloperCard developerName='Sasha Kindred' developerTitle= 'VP of Marketing'image={img3}/>
				<DeveloperCard developerName='Emily Donnavan' developerTitle= 'Product Lead'image={img4}/>
			</div>
		</div>
	
	</>);
}