import React, {Component, Fragment} from 'react';
import {AsyncStorage, StyleSheet, BackHandler, Alert} from 'react-native';
import { Container, Content, Form, Input, Item, Button, Text, View} from 'native-base';
import axios from 'axios'


class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
        headerLeft: null
    };
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            email: '',
            password: '',
        }
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
            return this.props.navigation.navigate("Login");
        });
    }
    
    componentWillUnmount() {
        this.backHandler.remove();
    }

    async handleButtonLogin(){
        try {
            const response = await axios.post('https://sms-project-trx.herokuapp.com/auth/login', {
                email:`${this.state.email}`,
                password:`${this.state.password}`
            })
            if(response.status==200){
                await AsyncStorage.setItem('token', response.data.token);
                await this.props.navigation.navigate('Home');
            } else{
                alert('email atau password salah')
            }
        } catch (e) {
            console.log(e);
            alert('terjadi kesalahan')
        }
    }

    render(){
        if(this.state.isLoading==true){
            return(
                <View>
                    <Text>
                        Loading... Soon will be replace with modal spinner...
                    </Text>
                </View>
            )
        }
        return(
            <Container>
                <Content>
                    <Form>
                        <Item>
                            <Input
                                placeholder="email"
                                value={this.state.email}
                                onChangeText={text=>this.setState({email:text})}
                            />
                        </Item>
                        <Item>
                            <Input
                                secureTextEntry={true}
                                placeholder="password" 
                                value={this.state.password}
                                onChangeText={text=>this.setState({password:text})}
                            />
                        </Item>
                        <Button style={styles.loginBtn} info onPress={()=>this.handleButtonLogin()}><Text> Login </Text></Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    loginBtn: {
        marginTop: 20,
    }
});

export default LoginScreen;