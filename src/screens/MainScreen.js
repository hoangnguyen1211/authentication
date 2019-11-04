import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MainScreen extends Component {

    state = { currentUser: null }

    render() {
        const { currentUser } = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {/* Hi {currentUser && currentUser.email}! */}
                    Hi Cybersoft
                </Text>
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
    text: {
        fontSize: 18,
        fontWeight: '600',
        textTransform: 'uppercase'
    }
})