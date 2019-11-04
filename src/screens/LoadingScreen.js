import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default class LoadingScreen extends Component {

    componentDidMount = () => {
        // setTimeout(() => {
        //     this.props.navigation.navigate('SignUpScreen');
        // }, 1000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.loading}>Loading...</Text>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading: {
        marginBottom: 20
    }
})
