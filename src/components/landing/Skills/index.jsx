import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="Angel Cloud" />
			</Thumbnail>
			<Details>
				<h1>About AngelCloud</h1>
				<p>
					AngelCloud is an innovative French startup that is developing a universal repository 
					for all connected devices so that they can all be accessed at the same time with a universal API.
				</p>
				<Button as={AnchorLink} href="#contact">
					Contact us
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
