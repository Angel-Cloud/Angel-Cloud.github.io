import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'Common'
import starIcon from 'Static/icons/star.svg'
import forkIcon from 'Static/icons/fork.svg'
import { Wrapper, Grid, Item, Content, Stats } from './styles'

// export const Projects = () => <div></div>

export const Projects = () => {
	// const {
	// 	github: {
	// 		repositoryOwner: {
	// 			repositories: { edges },
	// 		},
	// 	},
	// } = useStaticQuery(graphql`
	// 	{
	// 		github {
	// 			repositoryOwner(login: "smakosh") {
	// 				repositories(
	// 					first: 8
	// 					orderBy: { field: STARGAZERS, direction: DESC }
	// 				) {
	// 					edges {
	// 						node {
	// 							id
	// 							name
	// 							url
	// 							description
	// 							stargazers {
	// 								totalCount
	// 							}
	// 							forkCount
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// `)
	return (
		<Wrapper as={Container} id="projects">
			<h2>Projects</h2>
			<Grid>
				<Item
					key="abc42"
					as="a"
					href="#"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Card>
						<Content>
							<h4>AngelCloud-FHIR</h4>
							<p>FHIR is a standard for health care data exchange, published by HL7®.</p>
						</Content>
						<Stats>
							<div>
								<img src={starIcon} alt="stars" />
								<span>{65}</span>
							</div>
							<div>
								<img src={forkIcon} alt="forks" />
								<span>{42}</span>
							</div>
						</Stats>
					</Card>
				</Item>
				<Item
					key="abc43"
					as="a"
					href="#"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Card>
						<Content>
							<h4>AngelCloud-Blood-Glucose</h4>
							<p>The blood glucose measurement plateform</p>
						</Content>
						<Stats>
							<div>
								<img src={starIcon} alt="stars" />
								<span>{457}</span>
							</div>
							<div>
								<img src={forkIcon} alt="forks" />
								<span>{132}</span>
							</div>
						</Stats>
					</Card>
				</Item>
				{/* {edges.map(({ node }) => (
					<Item
						key={node.id}
						as="a"
						href={node.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Card>
							<Content>
								<h4>{node.name}</h4>
								<p>{node.description}</p>
							</Content>
							<Stats>
								<div>
									<img src={starIcon} alt="stars" />
									<span>{node.stargazers.totalCount}</span>
								</div>
								<div>
									<img src={forkIcon} alt="forks" />
									<span>{node.forkCount}</span>
								</div>
							</Stats>
						</Card>
					</Item>
				))} */}
			</Grid>
		</Wrapper>
	)
}
