import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import {
  MaterialCommunityIcons,
  Foundation,
  Fontisto,
  Entypo,
  AntDesign,
} from '@expo/vector-icons';

import ColorPalette from '../constants/ColorPalette';
import { Route, IUser } from '../interfaces';

const SitterProfileScreen = ({ route }: { route: Route }) => {
  const { sitter } = route.params;
  const [isFavourited, setFavourited] = useState<boolean>(false);

  const ExtraDetail = ({
    label,
    detail,
  }: {
    label: string;
    detail: string;
  }) => {
    return (
      <View style={styles.singleExtraDetail}>
        {sitter[detail] ? (
          <AntDesign name="checkcircle" size={40} color={ColorPalette.keppel} />
        ) : (
          <AntDesign
            name="minuscircleo"
            size={40}
            color={ColorPalette.keppel}
          />
        )}
        <Text style={styles.extraDetailText}>{label}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.mainBodyCard}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://source.unsplash.com/collection/9629809/500x500',
          }}
        />
        <View style={styles.detailsSection}>
          <View style={styles.quickDetails}>
            <View style={styles.nameAgeDistance}>
              <Text style={styles.name}>{sitter.fullName}</Text>
              <Text style={styles.normalText}>
                {moment().diff(sitter.dob, 'years')} years old
              </Text>
              <Text style={styles.normalText}>
                {sitter.distanceInKm} km away
              </Text>
            </View>
            <View style={styles.messagePhoneFav}>
              <TouchableOpacity
                style={
                  isFavourited
                    ? styles.favouriteButtonEnabled
                    : styles.favouriteButton
                }
                onPress={() => setFavourited(!isFavourited)}
              >
                <Entypo
                  name="heart"
                  size={24}
                  color={isFavourited ? 'white' : ColorPalette.indianRed}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <MaterialCommunityIcons
                  name="message-processing"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Foundation name="telephone" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bio}>
            <View style={styles.doubleQuotesLeft}>
              <Fontisto name="quote-left" size={15} color="grey" />
            </View>
            <Text style={styles.bioText}>{sitter.biography}</Text>
            <View style={styles.doubleQuotesRight}>
              <Fontisto name="quote-right" size={15} color="grey" />
            </View>
          </View>
          <View style={styles.extraDetails}>
            <ExtraDetail
              label="Experience with Twins"
              detail="twinsExperience"
            />
            <ExtraDetail
              label="Experience with Special Needs"
              detail="specialNeedExperience"
            />
            <ExtraDetail label="Own transportation" detail="ownTransport" />
            <ExtraDetail label="Reference Checked" detail="referenceChecked" />
            <ExtraDetail
              label="Available for Coffee Interview"
              detail="coffeeInterviewEnabled"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SitterProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorPalette.keppel,
  },
  mainBodyCard: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
  },
  detailsSection: {},
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  normalText: {
    color: 'grey',
  },
  quickDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nameAgeDistance: {
    padding: 20,
  },
  messagePhoneFav: {
    flexDirection: 'row',
  },
  iconButton: {
    height: 60,
    width: 60,
    backgroundColor: ColorPalette.keppel,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  favouriteButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: ColorPalette.indianRed,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  favouriteButtonEnabled: {
    height: 60,
    width: 60,
    backgroundColor: ColorPalette.indianRed,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  bio: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bioText: {
    paddingHorizontal: 30,
  },
  doubleQuotesLeft: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  doubleQuotesRight: {
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
  extraDetails: {
    backgroundColor: 'white',
    padding: 20,
    borderTopWidth: 4,
    borderTopColor: 'rgba(0,0,0,0.2)',
  },
  singleExtraDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  extraDetailText: {
    fontSize: 16,
    paddingLeft: 10,
  },
});
