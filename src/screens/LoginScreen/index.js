/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { styles } from "./styles.js";
import LoginPage from '../../components/LoginPage/index.js'
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation';
import * as appActions from "../../actions/index.js";
import { ToastAndroid } from "react-native";
import { makeSelectGlobal } from './selectors.js'
import { createStructuredSelector } from 'reselect';
import { Content, Container, Header, Footer } from "native-base";
import {Keyboard} from 'react-native'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: "",
                password: ''
            },
        }
    }
    static navigationOptions = {
        header: null
    };
    onChange(key, value) {
        var formData = Object.assign({}, this.state.formData, {
            [key]: value
        })
        this.setState({
            formData
        })
    }
    notNonmemberSubmit(){
     this.props.navigation.navigate("registration")
    }
    onSubmit() {
        Keyboard.dismiss
        this.props.actions.loginAction(this.state.formData)
    }
    componentWillReceiveProps(nextProps) {
        console.log("HI PROPS", this.props)
        if (nextProps.response.loginReducer.data.token) {
            ToastAndroid.show("Login Success", ToastAndroid.SHORT)
            this.props.navigation.navigate("homescreen")

        }
    }
    render() {
        console.log("PROPS IN SELECT",this.props)
        return (
            <LoginPage
                onChange={this.onChange.bind(this)}
                onSubmit={this.onSubmit.bind(this)}
                notNonmemberSubmit = {this.notNonmemberSubmit.bind(this)}
                formData={this.state.formData} />
        );
    }
}
const mapStateToProps = createStructuredSelector({
    response: makeSelectGlobal(),
});
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(appActions, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)