import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';

const ShoppingListApp = () => {
    const [item, setItem] = useState('');
    const [items, setItems] = useState([]);

    const handleAdd = () => {
        if (item.trim()) {
            setItems([...items, item.trim()]);
            setItem('');
        }
    };

    const handleClear = () => {
        setItems([]);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={item}
                onChangeText={setItem}
                placeholder="Enter shopping item"
                placeholderTextColor="#999"
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleAdd}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleClear}>
                    <Text style={styles.buttonText}>Clear</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Shopping List</Text>
            <FlatList
                data={items}
                renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
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
        marginVertical: 10,
        borderRadius: 15,
        backgroundColor: '#eee',
        color: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
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
    title: {
        fontSize: 22,
        marginTop: 20,
        marginBottom: 10,
    },
    listItem: {
        fontSize: 16,
        padding: 10,
        textAlign: 'center',
    }
});

export default ShoppingListApp;