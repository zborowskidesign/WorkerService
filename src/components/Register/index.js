import React, { useState } from 'react';
import Axios from 'axios';
import globalFn from '../globalFn';
import * as Styled from './styled';

const Register = () => {

    const [userNameReg, setUserNameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(false);

    const [infoLogin, setInfoLogin] = useState('');
    const [infoPassword, setInfoPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');



    const toggleClass = () => {
        setActive(!active);
        setActive2(false);
        globalFn();
      };


    const toggleClass2 = () => {
        setActive2(!active2);
        setActive(false);  
        globalFn();
    };

    const register = ()=> {
        Axios.post('http://localhost:3001/register', {
            login: userNameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response)
        })


        setActive(!active);
        setActive2(!active2)

        if(userNameReg.length < 1) {
            setInfoLogin('proszę podać login');
        }

        if(passwordReg.length < 1) {
            setInfoPassword('proszę podać hasło');
        }
    }

    const login = ()=> {
        Axios.post('http://localhost:3001/login', {
            login: username,
            password: password,
        }).then((response) => {

            if(response.data.message){
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].login)
            }
        })

        if(username.length < 1) {
            setInfoLogin('proszę podać login');
        }

        if(password.length < 1) {
            setInfoPassword('proszę podać hasło');
        }
    }


  return (
      <>
    <Styled.Wrapper>
        <Styled.ButtonSystemWrapper>
            <Styled.ButtonUser onClick={toggleClass}>
                <Styled.LinkTo>Sign in</Styled.LinkTo>
            </Styled.ButtonUser>

            <Styled.ButtonUser onClick={toggleClass2}>
                <Styled.LinkTo>Sign up</Styled.LinkTo>
            </Styled.ButtonUser>
        </Styled.ButtonSystemWrapper>

        <Styled.ContainerForm style={active ? { display:'block' } : { display:'none' }}>
            <Styled.FormTitle>Registration</Styled.FormTitle>
            <Styled.Label>Username</Styled.Label>
            <Styled.InfoText>{infoLogin}</Styled.InfoText>
            <Styled.Input 
            type="text"
            onChange={(e)=> {
                setUserNameReg(e.target.value)
            }}
            ></Styled.Input>
            <Styled.Label>Password</Styled.Label>
            <Styled.InfoText>{infoPassword}</Styled.InfoText>
            <Styled.Input 
            type="text"
            onChange={(e)=> {
                setPasswordReg(e.target.value)
            }}
            ></Styled.Input>
            <Styled.Button disabled={userNameReg.length < 1 || passwordReg.length < 1 ? true : false } onClick={register}>Register</Styled.Button>
        </Styled.ContainerForm>

        <Styled.ContainerForm style={active2 ? { display:'block' } : { display:'none' }}> 
            <Styled.FormTitle>Login</Styled.FormTitle>
            <Styled.Label>Username</Styled.Label>
            <Styled.InfoText>{infoLogin}</Styled.InfoText>
            <Styled.Input 
            type="text"
            onChange={(e)=> {
                setUserName(e.target.value)
            }}
            ></Styled.Input>
            <Styled.Label>Password</Styled.Label>
            <Styled.InfoText>{infoPassword}</Styled.InfoText>
            <Styled.Input 
            type="text"
            onChange={(e)=> {
                setPassword(e.target.value)
            }}
            ></Styled.Input>
            <Styled.Button disabled={username.length < 1 || password.length < 1 ? true : false } onClick={login}>Login</Styled.Button>
        </Styled.ContainerForm>
    </Styled.Wrapper>
    </>
  );
};


export default Register;
