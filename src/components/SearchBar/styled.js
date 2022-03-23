import styled from 'styled-components';
import { Color } from '../../theme/_color';

export const Wrapper = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

`
export const Form = styled.form`
   width: 100%;
   &.hide {
    
}
`;

export const Input = styled.input `
    min-height: 40px;
    padding-left: 10px;
    width: 300px;
    border-radius: 20px;
    border: 1px solid ${Color.gray_6};
`

export const Image = styled.img`
    width: 15px;
    object-fit: cover;
    margin-left: 7px;
    margin-top: 10px;
`

export const SeeMore = styled.p `
    text-align: center;
    font-size: 15px;
    font-family: 'IBM Plex Sans', sans-serif;
    margin-right: 20px;
    cursor: pointer;
`