import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://github.com/DDR-1/portfolio-website/blob/main/public/schneider-electric.png?raw=true"
								alt="sechneider-electric"
								className="work-image"
							/>
							<div className="work-title">Schneider Electric</div>
							<div className="work-subtitle">
								Application Engineer
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
