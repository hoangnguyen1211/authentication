import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class LoginScreen extends Component {

    state = { email: '', password: '', errorMessage: null }

    handleSignIn = () => {
        const { email, password }  = this.state;
        axios.post('https://myclass.vn/signin', {
            email, password
        })
        .then((response) => {
            // Đăng nhập thành công lưu token vào AsyncStorage
            let token = response.data;
            return AsyncStorage.setItem('@TOKEN', token);
        })
        .catch((error) => {
            console.log(error);
            Alert.alert('Login failed!');
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Sign In</Text>
                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={this.handleSignIn}>
                    <Text>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SignUpScreen')}>
                    <Text style={styles.link}>Go back SIGN UP</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        marginBottom: 25,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: '600'
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8,
        paddingHorizontal: 10,
        borderRadius: 20
    },
    button: {
        height: 43,
        width: '90%',
        marginVertical: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#ff5252'
    },
    link: {
        color: '#333',
        fontSize: 16,
        marginTop: 20
    }
})