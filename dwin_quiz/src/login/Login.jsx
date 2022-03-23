import React, { useState } from 'react';
import styles from './login.module.scss';
import icon1 from '../assets/icons/icon1.svg';
import icon2 from '../assets/icons/icon2.svg';
import google from '../assets/icons/google.svg';
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router';

const Login = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const mail = 'quiztime@gmail.com';
    const password = 'armsur2022';
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    function validation() {
        if (pass === password && login === mail) {
            navigate('/home')
        } else {
            setPass('');
            setLogin('');
            alert('Incorrect login or password')
        }
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.image}>
                    <div className={styles.content}>
                        <div className={styles.icon1}><img src={icon1} alt='#' /></div>
                        <p>Those people who develop the ability to continuously acquire new and better forms of knowledge that they can apply to their work and to their lives will be the movers and shakers in our society for the indefinite future</p>
                        <h4>Brian Tracy</h4>
                        <div className={styles.icon2}><img src={icon2} alt='#' /></div>
                    </div>
                </div>
                <div className={styles.loginBlock}>
                    <p className={styles.loginTitle}>Login to your Account </p>
                    <p className={styles.loginText}>with your registered Email Address</p>
                    <Form
                        form={form}
                        className={styles.form}
                        layout='vertical'
                    >
                        <Form.Item className={styles.email} label='Email address*' required>
                            <Input value={login} onChange={(e) => setLogin(e.target.value)} className={styles.emailInput} placeholder='Enter email address' />
                        </Form.Item>
                        <Form.Item className={styles.password} label='Password*'>
                            <Input.Password value={pass} onChange={(e) => setPass(e.target.value)} className={styles.passwordInput} placeholder='Password' />
                        </Form.Item>
                        <Form.Item name='remember' valuePropName='checked' wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox className={styles.checkbox}>Remember my password</Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Button onClick={() => validation()} className={styles.loginButton} type='primary'>Login</Button>
                        </Form.Item>
                        <Button className={styles.loginWithGooButton} type='primary'><img className={styles.gooIcon} src={google} alt='#' />Login with Google</Button>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Login;