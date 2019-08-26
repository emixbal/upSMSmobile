import React, {Component, Fragment} from 'react';
import {StyleSheet} from 'react-native';
import { Container, Content, Body, Title, Form, Input, Item, Header, Button, Text} from 'native-base';


class SettingScreen extends React.Component {
    static navigationOptions = {
        title: 'Setting',
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
                    <Text>
                        SettingScreen
                    </Text>
                </Content>
            </Container>
        )
    }
}

export default SettingScreen;