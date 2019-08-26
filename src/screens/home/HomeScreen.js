import React, {Component, Fragment} from 'react';
import {StyleSheet} from 'react-native';
import { Container, Content, Button, Text} from 'native-base';


class HomeScreen extends React.Component {
    static navigationOptions = {
        // title: 'UpSMS Dashboard',
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: '',
            password: ''
        }
    }

    render(){
        return(
            <Container>
                <Content>
                    <Text>
                        Home
                    </Text>
                    <Button onPress={()=>this.props.navigation.navigate("Login")}>
                        <Text> Login </Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default HomeScreen;