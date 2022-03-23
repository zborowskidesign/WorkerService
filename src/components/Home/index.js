import React from 'react';
import GifMainPage from '../../images/programming-gif.gif';
import Gears from '../../images/gears.gif';
import Rocket from '../../images/rocket-title.jpg';
import * as Styled from './styled';

const Home = () => {

  return (
    <>
    <Styled.Wrapper>
      <Styled.Title>
        Fly to dream Company
        <Styled.ImageRocket src={Rocket}/>
      </Styled.Title>
     <Styled.Image src={GifMainPage} />
     <Styled.ImageGears src={Gears} />
    </Styled.Wrapper>
    </>
  );
};


export default Home;
