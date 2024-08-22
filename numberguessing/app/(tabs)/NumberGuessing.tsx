import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const NumberGuessing = () => {
    const [guess, setGuess] = useState('');
    const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 100) + 1);
    const [numGuesses, setNumGuesses] = useState(0);

    const handleGuess = () => {
        const num = parseInt(guess);
        setNumGuesses(numGuesses + 1);
        if (num < secretNumber) {
            Alert.alert("Your guess " + num + " is too low");
        } else if (num > secretNumber) {
            Alert.alert("Your guess " + num + " is too high");
        } else {
            Alert.alert("Congratulations!", `You guessed the number in ${numGuesses + 1} guesses`, [
                { text: "OK", onPress: () => resetGame() }
            ]);
        }
        setGuess('');
    };

    const resetGame = () => {
        setSecretNumber(Math.floor(Math.random() * 100) + 1);
        setNumGuesses(0);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.instructions}>
                Guess a number between 1-100
            </Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                value={guess}
                onChangeText={setGuess}
                placeholder="Enter your guess"
                placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.button} onPress={handleGuess}>
                <Text style={styles.buttonText}>Make Guess</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    input: {
        width: '80%',
        padding: 20,
        marginVertical: 10,
        borderRadius: 15,
        backgroundColor: '#eee',
        color: 'black',
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 15,
        width: '80%',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    instructions: {
        fontSize: 22,
        marginBottom: 20,
    }
});

export default NumberGuessing;