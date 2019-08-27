import React, {Component, Fragment} from 'react';
import {StyleSheet} from 'react-native';
import { Container, Content, Body, Title, Form, Input, Item, Header, Button, Text} from 'native-base';


class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
        headerLeft: null
    };
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: '',
            password: ''
        }
    }

    handleButtonLogin(){
        this.props.navigation.navigate('Home')
    }

    render(){
        return(
            <Container>
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="email" />
                        </Item>
                        <Item>
                            <Input placeholder="password" />
                        </Item>
                        <Button info onPress={()=>this.handleButtonLogin()}><Text> Login </Text></Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}

export default LoginScreen;