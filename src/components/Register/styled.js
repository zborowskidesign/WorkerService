import styled from 'styled-components';
import { FontWeight } from '../../theme/_fonts';
import { Color } from '../../theme/_color';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  justify-content: center;
`;

export const ButtonSystemWrapper = styled.div `
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const ButtonUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 120px;
  margin-left:20px;
  align-items: center;
  border: 1px solid ${Color.gray_6};
  border-radius: 50px;
  &:hover {
    cursor: pointer;
  }
  &:nth-child(2) {
    background: ${Color.black};
    color: ${Color.white};
    margin-right: 50px;
    transition: 0.2s all linear;
  }
  &:nth-child(2):hover {
    background: ${Color.lightBlack};
  }
`
export const LinkTo = styled.p `
  font-weight: ${FontWeight.Bold};
  font-family: 'IBM Plex Sans', sans-serif;
`
export const Title = styled.div` 
  font-size: 24px;
  color: ${Color.neutralBlack};
  font-weight: ${FontWeight.Medium};
`;

export const ContainerForm = styled.div`

`

export const FormTitle = styled.p `
  font-size: 24px;
  color: ${Color.gray_5};
  font-weight: ${FontWeight.Medium};
  font-family: font-family: 'IBM Plex Sans', sans-serif;
`

export const Label = styled.label `
  display: block;
  margin-top: 30px;
  margin-bottom: 30px;
  color: ${Color.gray_5};
`
export const Input = styled.input `
  display: block;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid ${Color.gray_5};
  &:focus {
    outline: none !important;
  }
`
export const InfoText = styled.p`
  font-size: 12px;
  font-family: 'IBM Plex Sans', sans-serif;
  text-align: left;
  margin-top: -10px;
  color: ${Color.error};
`

export const Button = styled.button`
  margin-top: 30px;
  height: 50px;
  width: 100px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: ${FontWeight.Medium};
  cursor: pointer;
  background: transparent;
  border-radius: 20px;
  border: none;
  border: 2px solid ${Color.gray_6}; 
  transition: all 0.3s linear;
  &:hover {
    background: ${Color.gray_2};
    color: ${Color.white};
  }
`


