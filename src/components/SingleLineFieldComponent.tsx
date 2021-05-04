import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const SingleLineField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput
        style={styles.singleLineInput}
        placeholder={placeholder.toString()}
      />
    </View>
  );
};

export default SingleLineField;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  labelText: {
    color: 'grey',
    marginRight: 10,
  },
  singleLineInput: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomWidth: 1,
  },
});
