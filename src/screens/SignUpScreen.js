import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default class SignUpScreen extends Component {

    state = { fullname: '', email: '', password: '' }

    handleSignUp = () => {
        const { fullname, email, password }  = this.state;
        axios.post('https://myclass.vn/signup', {
            fullname, email, password
        })
        .then((response) => {
            // Đăng ký thành công chuyển qua màn hình đăng nhập
            this.props.navigation.navigate('LoginScreen');
        })
        .catch((error) => {
            console.log(error);
            Alert.alert('Wrong username or password!');
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput
                    placeholder="Fullname"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={fullname => this.setState({ fullname })}
                    value={this.state.fullname}
                />
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
                    onPress={this.handleSignUp}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('LoginScreen')}>
                    <Text style={styles.link}>Already have an account? LOGIN</Text>
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