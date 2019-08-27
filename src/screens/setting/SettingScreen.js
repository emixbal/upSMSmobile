import React, {Component, Fragment} from 'react';
import {StyleSheet, AsyncStorage} from 'react-native';
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

    async handleLogoutButton(){
        try {
            await AsyncStorage.removeItem('token')
            await this.props.navigation.navigate('Login')
        } catch (e) {
            alert('terjadi kesalahan');
        }
    }

    render(){
        return(
            <Container>
                <Content>
                    <Text>
                        SettingScreen
                    </Text>
                    <Button onPress={()=>this.handleLogoutButton()}>
                        <Text> Logout </Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default SettingScreen;