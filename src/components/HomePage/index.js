import React, { Component } from 'react';
import { Content, Container, Text, Header, Footer } from "native-base";
import { styles } from "./styles.js";
import { View, Image } from "react-native";
import EventPage from "./EventPage.js";
export default class HomePage extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <View style={styles.formContainer}>
                    <EventPage
                        {...this.props} />
                </View>
            </Container>
        );
    }
}
