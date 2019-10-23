import React from 'react'
import { Layout, Container } from 'Common'
import { Intro } from 'Components/landing'
import { Wrapper } from 'Components/landing/Projects/styles'

export default () => (
	<Layout>
    <Intro />
    <Wrapper as={Container} id="projects">
      <h3>Register as a patient/Regular user</h3>
      <h3>Register as a practionner/hospital </h3>
    </Wrapper>
  </Layout>
)