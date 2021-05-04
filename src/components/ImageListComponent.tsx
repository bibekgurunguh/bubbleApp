import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const ImageList = ({
  title,
  imageList,
}: {
  title: string;
  imageList: string[];
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView
        style={styles.imageListView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {imageList.map((url, index) => (
          <TouchableOpacity activeOpacity={0.7} key={index}>
            <Image style={styles.image} source={{ uri: url }} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ImageList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    padding: 20,
    paddingBottom: 10,
  },
  imageListView: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    height: 150,
    width: 150,
    margin: 5,
    borderRadius: 10,
  },
});
