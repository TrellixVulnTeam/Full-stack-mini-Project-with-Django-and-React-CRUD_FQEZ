import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import APIService from '../APIService';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';

function Login() {
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')

        const [token, setToken] = useCookies(['mytoken'])

        //register
        const [isLogin, setLogin] = useState(true)

        let history = useHistory()

        useEffect(() => {
                if(token['mytoken']) {
                        history.push('/blog')
                }
        })


        const loginBtn =() => {
                APIService.LoginUser({username, password})
                .then(resp => setToken('mytoken',resp.token))
                .catch(error => console.log(error))

        }

        const RegisterBtn = () => {

          APIService.RegisterUser({username, password})
          .then(() => loginBtn())
          .catch(error => console.log(error))
        }




  return (
    <div>
      {isLogin ? <h1>Login For Blog</h1> : <h1>register For Blog</h1>}
      
      
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value = {username} onChange = {e => setUsername(e.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value = {password} onChange = {e => setPassword(e.target.value)} />
        </Form.Group>

        {isLogin ? <Button variant="primary" type="submit" onClick = {loginBtn}>
          Login
        </Button>
        : <Button variant="primary" type="submit" onClick = {RegisterBtn}>
        Register
      </Button>
        
      }

        
        <br/>
        {isLogin ? <h4>If you don't have account, please <Button variant="primary" type="register" onClick = {() => setLogin(false)} >
          Register
        </Button> Here </h4>

        :  <h4>If you have account ,Please <Button variant="primary" type="register" onClick = {() => setLogin(true)} >
        Login
      </Button>Here</h4>
        }
      
    </div>
  );
}

export default Login;
