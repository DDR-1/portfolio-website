import React from "react";

function article_1() {
	return {
		date: "1 February 2024",
		title: "Analysis and multi-objective evolutionary optimization of Solar-Biogas hybrid system operated cascade Kalina organic Rankine cycle for sustainable cooling and green hydrogen production",
		link: "https://www.sciencedirect.com/science/article/pii/S0196890423013456?via%3Dihub",
		description:
			"A novel cascade system of Kalina and Organic Rankine cycle for cooling and green hydrogen production was proposed. Utilizing multi-objective decision-making techniques, diverse optimal points are pinpointed within the trade-off space, enabling real-time adaptive responses to changes in weather, energy demands, and biogas availability.",
		keywords: [
			"Multi-objective Optimization",
			"Devesh",
			"Devesh D R",
			"Evolutionary Algorithms"
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "28 May 2022",
		title: "Classification of Indian media titles using deep learning techniques",
		link: "https://www.sciencedirect.com/science/article/pii/S2666307422000109?via%3Dihub",
		description:
			"Automatic speech recognition is being used everywhere these days. An essential part of this is language identification. Our goal here is to identify the language of the media title, such as song names and movie titles, to help in speech recognition.",
		style: ``,
		keywords: [
			"Artificial Intelligence",
			"Devesh",
			"Devesh D R",
			"Machine Learning",
			"Deep Learning",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
