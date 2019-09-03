import React, { Component, Fragment } from 'react';
import { AsyncStorage, View, StyleSheet } from 'react-native';
import { Container, Button, Text, Content } from 'native-base';
import socketIOClient from 'socket.io-client';
import { NativeModules, PermissionsAndroid } from 'react-native';
var DirectSms = NativeModules.DirectSms;

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
            status: {
                color: '#d9534f',
                isConnected: false
            }
        }
    }

    async componentDidMount() {
        const socket = socketIOClient('https://sms-project-socket.herokuapp.com/');
        const id = 2;
        socket.on(`chatpesan:${id}`, function (DataChat) {
            alert(JSON.stringify(DataChat))
        })

        try {
            const token = await AsyncStorage.getItem('token');
            if (token == null) {
                this.props.navigation.navigate('Login')
                await this.setState({
                    isLoading: false,
                })
            } else {
                await this.setState({
                    isLoading: false,
                })
            }
        } catch (e) {
            alert('terjadi kesalahan');
        }
    }

    handleToggleButton() {
        if (this.state.status.isConnected == false) {
            this.setState({
                status: {
                    color: '#5cb85c',
                    isConnected: true
                }
            })
        } else {
            this.setState({
                status: {
                    color: '#d9534f',
                    isConnected: false
                }
            })
        }
    }

    async handlePesanButton(){
        await this.sendDirectSms()
    }

    // sendDirectSms() {
    //     alert('sent')
    //     DirectSms.sendDirectSms('081231760922', 'This is a direct message');
    // }

    async sendDirectSms() {
        try {
            const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.SEND_SMS,
                {
                    title: 'YourProject App Sms Permission',
                    message:
                    'YourProject App needs access to your inbox ' +
                    'so you can send messages in background.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                DirectSms.sendDirectSms('081231760922', 'This is a direct message');
            } else {
                console.log('SMS permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    }

    render() {
        if (this.state.isLoading == true) {
            return (
                <View>
                    <Text>
                        Loadingg...
                    </Text>
                </View>
            )
        }
        return (
            <Container>
                <Content>
                    <View style={[this.styles.center]}>
                        <Button rounded
                            style={[this.styles.connectTogle, { backgroundColor: this.state.status.color }]}
                            onPress={() => this.handleToggleButton()}
                        >
                            <Text>
                                {this.state.status.isConnected ? 'connected' : 'disconnected'}
                            </Text>
                        </Button>
                    </View>
                    <Button
                        onPress={() => this.sendDirectSms()}
                    >
                        <Text>
                            kirim pesan
                        </Text>
                    </Button>
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