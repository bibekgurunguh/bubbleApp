import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import ColorPalette from '../constants/ColorPalette';

const MessagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Messages</Text>
      <ScrollView style={styles.mainBodyCard}>
        <Text>You have no conversations</Text>
      </ScrollView>
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: ColorPalette.keppel,
  },
  screenTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  mainBodyCard: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
});
