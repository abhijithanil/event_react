/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { styles } from "./styles.js";
import RegistrationPage from '../../components/RegistrationPage/index.js'
import { bindActionCreators } from 'redux';
import * as appActions from "../../actions/index.js";
import { ToastAndroid } from "react-native";
import { makeSelectGlobal } from './selectors.js'
import { createStructuredSelector } from 'reselect';
import { Content, Container, Header, Footer } from "native-base";
class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                firstname: "",
                secondname: "",
                username: "",
                email: "",
                password1: "",
                password2: "",
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
    onSubmit() {
        var formData = {
            email: this.state.formData.email,
            password: this.state.formData.password1
        }
        this.props.actions.signupAction(formData)
    }
    componentWillReceiveProps(nextProps) {
        console.log("HI PROPS", this.props)
        
        if (nextProps.response.signupReducer.data.status===true){
            ToastAndroid.show("Sign up! completed.", ToastAndroid.SHORT)
            this.props.navigation.navigate("login")
            }

    }
    render() {
        console.log("PROPS IN SELECT", this.props)
        return (
            <RegistrationPage
                onChange={this.onChange.bind(this)}
                onSubmit={this.onSubmit.bind(this)}
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
export default connect(mapStateToProps, mapDispatchToProps)(Registration)