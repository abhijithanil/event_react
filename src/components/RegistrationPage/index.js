import React, { Component } from 'react';
import { Content, Container, Text, Header, Footer } from "native-base";
import { styles } from "./styles.js";
import { View, Image } from "react-native";
import RegistrationForm from './RegistrationForm.js';
export default class RegistrationPage extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../public/images/logo-black.png')}
                    />
                </View>
                <View style={styles.formContainer}>
                    <RegistrationForm
                        {...this.props} />
                </View>
            </Container>
        );
    }
}
