import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';

const GameOverScreen = (props) => 
{
    return (
        <View style = {styles.screen}>
            <TitleText>The Game is Over</TitleText>
            <View style = {styles.imageContainer}>
                <Image
                fadeDuration = {1000} 
                    //source = {require("../assets/success.png")}
                    source = {{uri: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}} 
                    style = {styles.image} resizeMode = "cover" />
            </View>
            <View style = {styles.resultContainer}>
                <BodyText style = {styles.resultText}>
                    Your phone needed<Text style = {styles.highlight}> {props.roundsNumber}</Text> rounds to guess the number <Text style = {styles.highlight}>{props.userNumber}</Text>
                </BodyText>
            </View>
            <MainButton onPress = {props.onRestart}>NEW GAME</MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: 
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer:
    {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: "black",
        overflow: "hidden",
        marginVertical: 30
    }, 
    image:
    {
        width: "100%",
        height: "100%"
    },
    resultContainer: 
    {
        marginHorizontal: 30,
        marginVertical: 15
    },
    resultText:
    {
        textAlign: "center",
        fontSize: 20
    },
    highlight: 
    {
        color: Colors.primary,
        fontFamily: "open-sans-bold"
    }
});

export default GameOverScreen;