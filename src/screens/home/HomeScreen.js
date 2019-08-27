import React, {Component, Fragment} from 'react';
import {AsyncStorage} from 'react-native';
import { Container, Content, Button, Text, View} from 'native-base';


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'UpSMS Dashboard',
    };
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            email: '',
            password: '',
            token:''
        }
    }

    async componentDidMount(){
        try {
            const token = await AsyncStorage.getItem('token');
            if(token == null){
                this.props.navigation.navigate('Login')
                await this.setState({
                    isLoading:false,
                    token: ''
                })
            } else{
                await this.setState({
                    isLoading:false,
                    token: token
                })
            }
        } catch (e) {
            alert('terjadi kesalahan');       
        }
    }

    async handleLogoutButton(){
        try {
            await AsyncStorage.removeItem('token')
            await this.props.navigation.navigate('Login')
            await this.setState({
                token: ''
            })
        } catch (e) {
            alert('terjadi kesalahan');
        }
    }

    render(){
        if(this.state.isLoading==true){
            return(
                <View>
                    <Text>
                        Loadingg...
                    </Text>
                </View>
            )
        }
        
        if(this.state.token==''){
            // this.handleGoBack()
            this.props.navigation.navigate('Login')
        }
        return(
            <Container>
                <Content>
                    <Text>
                        Home
                    </Text>
                    <Text>
                        {this.state.token}
                    </Text>
                    <Button onPress={()=>this.handleLogoutButton()}>
                        <Text> Logout </Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default HomeScreen;