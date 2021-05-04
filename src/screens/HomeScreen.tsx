import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import ColorPalette from '../constants/ColorPalette';
import ImageList from '../components/ImageListComponent';

const bottomFrame = require('../assets/images/bottomFrame.png');

const photos = [
  'https://source.unsplash.com/UH-xs-FizTk',
  'https://source.unsplash.com/ViyA5myhBVw',
  'https://source.unsplash.com/ff5K3-kYPHA',
  'https://source.unsplash.com/tNCH0sKSZbA',
  'https://source.unsplash.com/afj6T0Gb9h4',
  'https://source.unsplash.com/oYh8zXX5yBM',
  'https://source.unsplash.com/gfnn_yQE4gA',
  'https://source.unsplash.com/H1detkeKIDw',
  'https://source.unsplash.com/MTZTGvDsHFY',
  'https://source.unsplash.com/O2LLAZlaUFA',
  'https://source.unsplash.com/tNQIGigTRI8',
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.mainBodyCard}>
        <View>
          <Image style={styles.sloganImage} source={{ uri: photos[0] }} />
          <Image
            style={styles.bottomFrame}
            source={bottomFrame}
            tintColor={ColorPalette.keppel}
          />
        </View>
        <View style={styles.sloganView}>
          <Text style={styles.slogan}>Bubble for your Babysitting Needs</Text>
          <View style={styles.tags}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Safe</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Easy</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Convenient</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Helpful</Text>
            </View>
          </View>
        </View>
        <ImageList title="Meet the Sitters" imageList={photos.slice(6)} />
        <ImageList title="Meet the Parents" imageList={photos.slice(1, 6)} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainBodyCard: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  sloganImage: {
    width: '100%',
    height: 300,
  },
  bottomFrame: {
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 0,
  },
  sloganView: {
    backgroundColor: ColorPalette.keppel,
    padding: 20,
  },
  slogan: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  tags: {
    flexDirection: 'row',
  },
  tag: {
    borderRadius: 50,
    backgroundColor: 'white',
    padding: 5,
    alignItems: 'center',
    marginTop: 10,
    marginRight: 10,
    paddingHorizontal: 15,
  },
  tagText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: ColorPalette.keppel,
  },
});
