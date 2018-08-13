/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { styles } from "./styles.js";
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation';
import * as appActions from "../../actions/index.js";
import { ToastAndroid } from "react-native";
import { makeSelectGlobal } from './selectors.js'
import { createStructuredSelector } from 'reselect';
import { Content, Container, Header, Footer } from "native-base";
import HomePage from '../../components/HomePage/index.js'



class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
                events:{}
        }
    }
    static navigationOptions = {
        header: null
    };
    componentWillMount() {
        this.setState({
            events:[
                  {
                    "event-name": "Name1",
                    "event-id": "xx1",
                    "event-image": [
                      "https://images.pexels.com/photos/5156/people-eiffel-tower-lights-night.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                      "https://images.pexels.com/photos/382297/pexels-photo-382297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                      "https://images.pexels.com/photos/16408/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    ],
                    "event-location": "kochi",
                    "event-geo": "12.9716° N, 77.5946° E",
                    "event-availabity": 234,
                    "occupied": 34,
                    "unoccupied": 200,
                    "event-type": "",
                    "event-description": "description",
                    "event-date": "15/8/2018",
                    "last-booking-date": "13/8/2018"
                  }
                ]
        })
    }
    componentWillReceiveProps(nextProps) {

    }
    render() {
        return (
            <HomePage events={this.state.events}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)