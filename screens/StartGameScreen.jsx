import React, {useState} from 'react';
import {View,Text,TextInput,Button,TouchableWithoutFeedback,Keyboard,Alert,StyleSheet,Dimensions} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const StartGameScreen = (props) => 
{
    const [enteredValue, setEnteredValue] = useState("");

    const [confirmed, setConfirmed] = useState(false);

    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = (inputText) => 
    {
        setEnteredValue(inputText.replace(/[^0-9]/g, ""));
    };

    const resetInputHandler = () => 
    {
        setEnteredValue("");
        setConfirmed(false);
    };

    const confirmInputHandler = () => 
    {
        const chosenNumber  = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99)
        {
            Alert.alert("Invalid Number!", "Number has to be a number between 1 and 99.", [{text: "Okay", style: "destructive",  onPress: resetInputHandler}]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue("");
    };

    let confirmedOuput;

    if(confirmed)
    {
        confirmedOuput = (
          <Card style = {styles.summaryContainer}>
              <Text>You Selected</Text>
              <NumberContainer>{selectedNumber}</NumberContainer>
              <MainButton title = "START GAME" onPress = {() => props.onStartGame(selectedNumber)} >
                  START GAME
              </MainButton>
          </Card>
        );
    }

    return (
      <TouchableWithoutFeedback onPress = {() => {
          Keyboard.dismiss();
      }}>
          <View style = {styles.screen}>
            <Text style = {styles.title}>Start A New Game</Text>
            <Card style = {styles.inputContainer} >
                <Text style = {styles.text}>Select a Number</Text>
                <Input style = {styles.input} blurOnSubmit autoCapitalize = "none" autoCorrect = {false} keyboardType = "number-pad" maxLength = {2} onChangeText = {numberInputHandler} value = {enteredValue} />
                <View style = {styles.buttonContainer}>
                    <View style = {styles.button}>
                        <Button title = "Reset" onPress = {resetInputHandler} color = {Colors.accent} />
                    </View>
                    <View style = {styles.button}>
                        <Button title = "Confirm" onPress = {confirmInputHandler} color = {Colors.primary} />
                    </View>
                </View>
            </Card>
            {confirmedOuput}
        </View>
      </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: 
    {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    title: 
    {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: "open-sans-bold"
    },
    inputContainer: 
    {
        width: 300,
        alignItems: "center"
    },
    buttonContainer: 
    {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        marginTop: Dimensions.get("window").height > 600 ? 30 : 5,
        paddingHorizontal: 15
    },
    button:
    {
        //width: 100
        width: Dimensions.get("window").width / 4
    },
    input: 
    {
        width: 50,
        textAlign: "center"
    },
    summaryContainer: 
    {
        marginTop: 20,
        alignItems: "center"
    },
    text:
    {
        fontFamily: "open-sans"
    }
});

export default StartGameScreen;