import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';

class App extends Component {
    componentWillMount() {
            firebase.initializeApp({
            apiKey: 'AIzaSyCo0R6C-1aGdzru1BO4I6hl3frsi6MUotY',
            authDomain: 'auth-55afc.firebaseapp.com',
            databaseURL: 'https://auth-55afc.firebaseio.com',
            projectId: 'auth-55afc',
            storageBucket: 'auth-55afc.appspot.com',
            messagingSenderId: '134221999331'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
            </View>
        );
    }
}

export default App;
