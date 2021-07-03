import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        The purpose of being MERN STACK DEVELOPER is to provide the best and fast UI/UX web solutions with my programming skills.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;