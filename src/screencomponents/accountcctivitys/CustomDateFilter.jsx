import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, DatePickerAndroid } from 'react-native';

const CustomDateFilter = ({ onFilter }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const showDatePicker = async (type) => {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                mode: 'calendar',
                date: type === 'start' ? startDate || new Date() : endDate || new Date(),
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                const selectedDate = new Date(year, month, day);
                type === 'start' ? setStartDate(selectedDate) : setEndDate(selectedDate);
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    };

    const applyFilter = () => {
        if (startDate && endDate) {
            onFilter(startDate, endDate);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Start Date:</Text>
            <Button title={startDate ? startDate.toDateString() : 'Select Start Date'} onPress={() => showDatePicker('start')} />
            <Text style={styles.label}>End Date:</Text>
            <Button title={endDate ? endDate.toDateString() : 'Select End Date'} onPress={() => showDatePicker('end')} />
            <Button title="Apply Filter" onPress={applyFilter} disabled={!startDate || !endDate} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default CustomDateFilter;
