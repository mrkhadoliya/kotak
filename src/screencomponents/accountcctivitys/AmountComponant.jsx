import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AmountComponent = ({ amount, color }) => {
  // Splitting the amount into two parts: before and after the decimal point
  const [beforeDecimal, afterDecimal] = amount.toString().split('.');
    const isRed=color==='red';

  return (
    <View style={styles.container}>
     
      {isRed && <Text style={[styles.beforeDecimal, { color: color }]}>-</Text>}
      <Text style={[styles.beforeDecimal, { color: color }]}>{beforeDecimal}</Text>
      <Text style={[styles.decimalPoint, { color: color }]}>.</Text>
      <Text style={[styles.afterDecimal, { color: color }]}>{afterDecimal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'baseline', // Align text baseline
  },
  beforeDecimal: {
    flex: 1, // Ensure the text before the decimal expands to fill the available space
    textAlign: 'right', // Align text to the right
    fontWeight:500,
    fontSize: 16, // Font size for the part before the decimal point
  },
  decimalPoint: {
    fontSize: 16, // Font size for the decimal point
  },
  afterDecimal: {
    fontWeight:700,
    fontSize: 12, // Font size for the part after the decimal point
  },
});

export default AmountComponent;
