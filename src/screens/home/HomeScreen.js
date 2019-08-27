import React, {Component, Fragment} from 'react';
import {AsyncStorage, View, StyleSheet} from 'react-native';
import { Container, Button, Text, Content} from 'native-base';


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
            status:{
                color:'#d9534f',
                isConnected:false
            }
        }
    }

    async componentDidMount(){
        try {
            const token = await AsyncStorage.getItem('token');
            if(token == null){
                this.props.navigation.navigate('Login')
                await this.setState({
                    isLoading:false,
                })
            } else{
                await this.setState({
                    isLoading:false,
                })
            }
        } catch (e) {
            alert('terjadi kesalahan');       
        }
    }

    handleToggleButton(){
        if(this.state.status.isConnected==false){
            this.setState({status:{
                color:'#5cb85c',
                isConnected:true
            }})
        } else{
            this.setState({status:{
                color:'#d9534f',
                isConnected:false
            }})
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
        return(
            <Container>
                <Content>
                    <View style={[this.styles.center]}>
                        <Button rounded
                            style={[this.styles.connectTogle, {backgroundColor:this.state.status.color}]}
                            onPress={()=>this.handleToggleButton()}
                        >
                            <Text>
                                {this.state.status.isConnected ? 'connected' : 'disconnected'}
                            </Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        )
    }

    styles = StyleSheet.create({
        connectTogle: {
            marginTop: 20,
            marginBottom: 20,
            color: '#fff',
        },
        center: {
            justifyContent: 'center',
            alignItems: 'center'
        }
    });

}

export default HomeScreen;