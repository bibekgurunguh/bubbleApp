import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { userContext } from '../contexts/userContext';
import { user } from '../types';
import ColorPalette from '../constants/ColorPalette';
import SingleLineField from '../components/SingleLineFieldComponent';
import MultiLineField from '../components/MultiLineFieldComponent';
import Expandable from '../components/ExpandableComponent';
import ToggleSwitch from '../components/ToggleSwitchComponent';

const ProfileScreen = () => {
  const [user] = useContext<user>(userContext);

  const ProfileSection = () => {
    return (
      <>
        <SingleLineField
          label="First Name"
          placeholder={user.userInfo.firstName}
        />
        <SingleLineField
          label="Last Name"
          placeholder={user.userInfo.lastName}
        />
        <SingleLineField label="Email" placeholder={user.userInfo.email} />
        <SingleLineField
          label="Mobile"
          placeholder={user.userInfo.mobileNumber}
        />
        <MultiLineField label="Bio" placeholder={user.userInfo.biography} />
      </>
    );
  };

  const AddressSection = () => {
    return (
      <>
        <SingleLineField
          label="House Number"
          placeholder={user.userInfo.address.houseNo}
        />
        <SingleLineField
          label="Street"
          placeholder={user.userInfo.address.street}
        />
        <SingleLineField
          label="Town"
          placeholder={user.userInfo.address.town}
        />
        <SingleLineField
          label="Postcode"
          placeholder={user.userInfo.address.postcode}
        />
      </>
    );
  };

  const AllergiesSection = () => {
    return (
      <>
        <ToggleSwitch title="Pets" activeByDefault={false} />
        <ToggleSwitch title="Wheat" activeByDefault={false} />
        <ToggleSwitch title="Nuts" activeByDefault={false} />
        <ToggleSwitch title="Dairy" activeByDefault={true} />
        <ToggleSwitch title="Lactose" activeByDefault={true} />
        <MultiLineField label="Other Allergies" />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.profileImage}
          source={{
            uri:
              'https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg',
          }}
        />
        <TouchableOpacity
          style={styles.uploadImageButton}
          activeOpacity={0.7}
          onPress={() =>
            Alert.alert('This feature is not available at the moment.')
          }
        >
          <MaterialIcons name="edit" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.detailsCard}>
        <ScrollView style={styles.scrollView}>
          <Expandable title="Profile" activeByDefault={true}>
            <ProfileSection />
          </Expandable>
          <View style={styles.horizontalLine} />

          <Expandable title="Address">
            <AddressSection />
          </Expandable>
          <View style={styles.horizontalLine} />

          <Expandable title="Allergies">
            <AllergiesSection />
          </Expandable>
          <View style={styles.horizontalLine} />
        </ScrollView>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: ColorPalette.keppel,
  },
  imageContainer: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    zIndex: 5,
    elevation: 5,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  uploadImageButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: ColorPalette.keppel,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 6,
    elevation: 6,
  },
  detailsCard: {
    flex: 1,
    width: '100%',
    marginTop: 120,
    paddingTop: 120,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  scrollView: {
    padding: 20,
  },
  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: 'grey',
    marginVertical: 10,
  },
});
