import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class DashboardScreen extends Component{
    render(){
        return(
            <View>
                <Text>DashboardScreen</Text>
            </View>
        )
    }
}

export default DashboardScreen;

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',    
    }
})