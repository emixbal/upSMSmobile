import React, {Component, Fragment} from 'react';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillUpdate is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
]);

// import LoginScreen from './src/screens/login/LoginScreen.js';

import RootNavigator from './src/RootNavigator'

class App extends React.Component {
    render(){
        return(
            <RootNavigator />
        )
    }
}

export default App;