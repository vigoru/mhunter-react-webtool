import React, { useState } from 'react'
import { SectionContainer, SectionBg, VideoBg, SectionContent, SectionH1, SectionP, SectionBtnWrapper, ArrowForward, ArrowRight } from './styles'
import Video from '../../assets/videos/fire.mp4';
import {ScrollButton as Button} from '../Button';
const Section = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <SectionContainer>
      <SectionBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </SectionBg>
      <SectionContent>
        <SectionH1>Descanse um Pouco guerreiro</SectionH1>
        <SectionP>vc ja codificou bastante por hj.</SectionP>
        <SectionBtnWrapper>
          <Button to='/signup' onMouseEnter={onHover} onMouseLeave={onHover} primary={'true'} dark={'true'}>
            Iniciar descanso {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </SectionBtnWrapper>
      </SectionContent>
    </SectionContainer>
  )
}

export default Section
