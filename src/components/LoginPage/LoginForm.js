import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from "./styles.js";

export default class LoginForm extends Component {
    render() {
        return (
            <View>
                <TextInput
                    placeholder='Email'
                    onChangeText={(text) => this.props.onChange('email', text)}
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    style={styles.input} />
                <TextInput
                    placeholder='Password'
                    onChangeText={(text) => this.props.onChange('password', text)}
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    style={styles.input} />
                <TouchableOpacity
                    onPress={this.props.onSubmit}
                    style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.props.notNonmemberSubmit}
                    style={styles.notMemberButtonContainer}>
                    <Text style={styles.buttonText}>Not yet a member?.</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
