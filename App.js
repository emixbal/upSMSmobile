import React, {Component, Fragment} from 'react';
import {View, Text} from 'react-native';

import Login from './src/screens/login'

class App extends React.Component {
    render(){
        return(
            <Fragment>
                <Login />
            </Fragment>
        )
    }
}

export default App;