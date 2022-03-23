import styled from 'styled-components';
import { FontWeight } from '../../theme/_fonts';
import { Color } from '../../theme/_color';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  justify-content: center;
`;

export const Title = styled.div` 
  font-size: 34px;
  margin-top: 10px;
  color: ${Color.neutralBlack};
  cursor: pointer;
  font-weight: ${FontWeight.Medium};
  font-family: 'IBM Plex Sans', sans-serif;
`;


export const Image = styled.img`
  position: absolute;
  left: 0;
  bottom: 5%;
  z-index: -1;
  display: block;
  width: 100%;
  max-width: 30%;
  object-fit: cover;
`;

export const ImageRocket = styled.img`
  position: absolute;
  width: 50px;
  object-fit: cover;
`;

export const ImageGears = styled.img`
  position: absolute;
  right: 0;
  bottom: 5%;
  z-index: -1;
  display: block;
  width: 100%;
  max-width: 20%;
  object-fit: cover;
`;


