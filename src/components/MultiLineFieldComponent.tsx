import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const MultiLineField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.multiLineInput}
        placeholder={placeholder.toString()}
        multiline={true}
      />
    </View>
  );
};

MultiLineField.defaultProps = {
  placeholder: '',
};

export default MultiLineField;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    height: 100,
  },
  label: {
    color: 'grey',
  },
  multiLineInput: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
