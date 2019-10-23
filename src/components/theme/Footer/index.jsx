import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'Common'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social.json'

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2>AngelCloud</h2>
				<span>
					© All rights are reserved | 2016-{new Date().getFullYear()} 
					{/* | Made with{' '}
					<span aria-label="love" role="img">
						💖
					</span>{' '}
					by{' '}
					<a
						href="https://smakosh.com/?ref=portfolio-dev"
						rel="noopener noreferrer"
						target="_blank"
					>
						Smakosh
					</a> */}
				</span>
			</Details>
			<Links>
				<Link to="/privacy-policy">Privacy Policy</Link>
				<Link to="/terms-and-conditions">Terms & Conditions</Link>
				<Link to="/sign-in">Sign in</Link>
				<Link to="/register">Register</Link>
				{social.map(({ id, name, link, icon }) => (
					<a
						key={id}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`follow me on ${name}`}
					>
						<img width="24" src={icon} alt={name} />
					</a>
				))}
			</Links>
		</Flex>
	</Wrapper>
)
