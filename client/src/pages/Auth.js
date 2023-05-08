import {NavLink, useLocation} from 'react-router-dom'
import {Button, Card, Container, Form, Row} from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { registration, login } from '../http/userAPI';
import { useState } from 'react';


const Auth = () => {

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () =>{
        if (isLogin) {
            const response = await login();

        } else {
            const response = await registration(email, password);
            console.log(response)
        }

        const response = await registration()
        console.log(response)
    }


  

    return (
        <Container 
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 450}} className="p-5 shadow">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
            <Form className="d-flex flex-column">
                <Form.Control
                className="mt-3" 
                placeholder="Введите ваш email..."
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <Form.Control
                className="mt-3" 
                placeholder="Введите ваш пароль..."
                value={password}
                onChange={e => setPassword(e.target.value)}
                type='password'
                />

                <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                    {isLogin ?
                    <div>
                        Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                    </div>
                    :
                    <div>
                        Есть аккаунт?? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                    </div>
                    }
                    <Button 
                    className="mt-3"
                    variant={"outline-success"}
                    onClick={click}
                    >
                        {isLogin ? 'Войти' : 'Регистрация'}
                    </Button>
                </Row>
            </Form>

            </Card>
            <Card className="ml-3 p-5 shadow" style={{backgroundColor: '#27AE60', height:338, width: 300}}>
                <Card.Title className="text-white text-center mt-5">Clean Choice</Card.Title>
                <Card.Text className="text-white text-center mt-3">
                    Мы поддерживаем эко-сознательное потребление и заботимся о чистоте окружающей среды.
                </Card.Text>
            </Card>
            
          
        </Container>
    );
};

export default Auth;