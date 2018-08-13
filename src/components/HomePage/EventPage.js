import React, { Component } from 'react';
import { ListView, Text, View, Image, StyleSheet } from 'react-native';

import { styles } from "./styles.js";
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });


export default class EventPage extends Component {


    generateEvents(events) {
        var eventList = []
        for (var i = 0; i < events.length; i++) {

            var item ={
                "title":events[i].event-name,
                "location":events[i].event-location,
                "img":events[i].event-image[0]
            }
            eventList.push(item)
        }

        return  ds.cloneWithRows(eventList)

    }
    render() {

        var dataSource = this.generateEvents(this.props.events)
        var staticImage = "https://images.pexels.com/photos/5156/people-eiffel-tower-lights-night.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        return (
            <ListView
                dataSource={dataSource}
                renderRow={data => (
                    <View style={styles.container}>
                        <Image
                            source={{ uri:staticImage }}
                            style={styles.img}
                        />
                        <Text>{data.title}</Text>
                        {/* <Text>{data.location}</Text> */}
                    </View>)}
            />
        );
    }
}
