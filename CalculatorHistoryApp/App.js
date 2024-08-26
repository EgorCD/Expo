import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';

const CalculatorHistoryApp = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    const [history, setHistory] = useState([]);

    const handleAddition = () => {
        const sum = parseFloat(num1) + parseFloat(num2);
        const resultString = sum.toString();
        setResult(resultString);
        setHistory([...history, `${num1} + ${num2} = ${resultString}`]);
        setNum1('');
        setNum2('');
    };

    const handleSubtraction = () => {
        const difference = parseFloat(num1) - parseFloat(num2);
        const resultString = difference.toString();
        setResult(resultString);
        setHistory([...history, `${num1} - ${num2} = ${resultString}`]);
        setNum1('');
        setNum2('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.resultText}>Result: {result}</Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                value={num1}
                onChangeText={setNum1}
                placeholder="Enter first number"
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                value={num2}
                onChangeText={setNum2}
                placeholder="Enter second number"
                placeholderTextColor="#999"
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleAddition}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleSubtraction}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={history}
                renderItem={({ item }) => <Text style={styles.historyItem}>{item}</Text>}
                ListEmptyComponent={<Text style={styles.emptyHistory}>No history</Text>}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 250,
        backgroundColor: '#fff',
    },
    input: {
        width: '80%',
        padding: 20,
        marginVertical: 5,
        borderRadius: 15,
        backgroundColor: '#eee',
        color: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginTop: 20,
    },
    button: {
        flex: 1,
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 15,
        marginHorizontal: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
    resultText: {
        fontSize: 22,
        marginVertical: 20,
    },
    historyItem: {
        fontSize: 16,
        padding: 10,
        textAlign: 'center',
    },
    emptyHistory: {
        fontSize: 16,
        color: '#888',
        marginTop: 20,
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
        width: '80%',
        alignSelf: 'center',
    }
});

export default CalculatorHistoryApp;