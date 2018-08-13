import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from "./styles.js";

export default class RegistrationForm extends Component {
    render() {
        return (
            <View>
                <TextInput
                    placeholder='First Name'
                    onChangeText={(text) => this.props.onChange('firstname', text)}
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    style={styles.input} />
            
                <TextInput
                    placeholder='Second Name'
                    onChangeText={(text) => this.props.onChange('secondname', text)}
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    style={styles.input} />
                
                <TextInput
                    placeholder='User Name'
                    onChangeText={(text) => this.props.onChange('username', text)}
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    style={styles.input} />
                
                <TextInput
                    placeholder='Email'
                    onChangeText={(text) => this.props.onChange('email', text)}
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    style={styles.input} />
                <TextInput
                    placeholder='Password'
                    onChangeText={(text) => this.props.onChange('password1', text)}
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    style={styles.input} />
                <TextInput
                    placeholder='Confirm Password'
                    onChangeText={(text) => this.props.onChange('password2', text)}
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    style={styles.input} />
                <TouchableOpacity
                    onPress={this.props.onSubmit}
                    style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
