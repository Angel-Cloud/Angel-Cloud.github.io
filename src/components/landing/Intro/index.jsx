import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>AngelCloud.io</h1>
				<h4>For demonstration purposes only.</h4>
				{/* <Button as={AnchorLink} href="#contact">
					Hire me
				</Button> */}
			</Details>
			<Thumbnail>
				<img src={dev} alt="AngelCloud.io" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
