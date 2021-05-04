import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import ColorPalette from '../constants/ColorPalette';
import { IUser, Navigation } from '../interfaces';
import { getSitters } from '../services/ApiService';
import { token } from '../config';

const SittersScreen = ({ navigation }: { navigation: Navigation }) => {
  const [sitters, setSitters] = useState<IUser[] | undefined>(undefined);

  useEffect(() => {
    (async () => {
      let sittersArray = await getSitters(token);
      setSitters(sittersArray.sort((a, b) => a.distanceInKm - b.distanceInKm));
    })();
  }, []);

  const SitterCard = ({ sitter }) => {
    return (
      <TouchableOpacity
        style={styles.sitterCard}
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate('SitterProfileScreen', { sitter });
        }}
      >
        <View style={styles.top}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://source.unsplash.com/collection/9629809/500x500',
            }}
          />
          <View style={styles.nameAndTags}>
            <Text style={styles.name}>{sitter.fullName}</Text>
            <View style={styles.tagsView}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>{sitter.distanceInKm} km</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>£{sitter.hourlyRate}/hr</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.bio}>
          <Text>{sitter.biography}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Sitters nearby</Text>
      <View style={styles.mainBodyCard}>
        {sitters ? (
          <ScrollView style={styles.scrollView}>
            {sitters?.map((sitter) => (
              <SitterCard sitter={sitter} key={sitter.id} />
            ))}
          </ScrollView>
        ) : (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color={ColorPalette.keppel} />
            <Text>Loading Sitters near you...</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default SittersScreen;

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
    backgroundColor: 'rgba(255,255,255,0.8)',
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  scrollView: {
    padding: 20,
  },
  sitterCard: {
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 5,
  },
  top: {
    flexDirection: 'row',
    margin: 10,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },
  nameAndTags: {
    flexDirection: 'column',
    paddingLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tagsView: {
    flexDirection: 'row',
  },
  tag: {
    minWidth: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorPalette.indianRed,
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    marginTop: 10,
  },
  tagText: {
    color: 'white',
    fontWeight: 'bold',
  },
  horizontalLine: {
    height: 1,
    width: '95%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignSelf: 'center',
  },
  bio: {
    padding: 15,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
