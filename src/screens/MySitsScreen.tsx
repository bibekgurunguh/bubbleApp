import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import moment from 'moment';

import ColorPalette from '../constants/ColorPalette';
import { getBookings } from '../services/ApiService';
import { token } from '../config';
import { bookings } from '../types';

const MySitsScreen = () => {
  const [bookings, setBookings] = useState<bookings | undefined>(undefined);
  const [topTab, setTopTab] = useState<string>('confirmed');

  useEffect(() => {
    (async () => {
      const fetchedBookings: bookings = await getBookings(token);
      setBookings(fetchedBookings);
    })();
  }, []);

  const TopTabBar = () => {
    return (
      <View style={styles.topTabBar}>
        <TouchableOpacity
          style={[
            styles.tabView,
            { borderBottomWidth: topTab === 'confirmed' ? 2 : 0 },
          ]}
          activeOpacity={0.7}
          onPress={() => setTopTab('confirmed')}
        >
          <Text
            style={{
              color: topTab === 'confirmed' ? 'black' : 'rgba(0,0,0,0.5)',
            }}
          >
            Confirmed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabView,
            { borderBottomWidth: topTab === 'requested' ? 2 : 0 },
          ]}
          activeOpacity={0.7}
          onPress={() => setTopTab('requested')}
        >
          <Text
            style={{
              color: topTab === 'requested' ? 'black' : 'rgba(0,0,0,0.5)',
            }}
          >
            Requested
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const BookingComponent = ({
    name,
    date,
    duration,
  }: {
    name: string;
    date: Date;
    duration: number;
  }) => {
    return (
      <View style={styles.bookingCard}>
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.horizontalLine} />
        <View style={styles.imageAndTiles}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://source.unsplash.com/collection/9629809/500x500',
            }}
          />
          <View style={styles.tile}>
            <MaterialIcons name="date-range" size={24} color="white" />
            <Text style={styles.tileText}>
              {moment(date).format('Do MMM YY')}
            </Text>
          </View>
          <View style={styles.tile}>
            <Ionicons name="ios-time-outline" size={24} color="white" />
            <Text style={styles.tileText}>
              {moment(date).format('hh:mm a')}
            </Text>
          </View>
          <View style={styles.tile}>
            <Ionicons name="md-hourglass-outline" size={24} color="white" />
            <Text style={styles.tileText}>{duration} hr</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>My Sits</Text>
      <View style={styles.mainBodyCard}>
        <TopTabBar />
        <View style={styles.horizontalLine} />
        {bookings ? (
          <ScrollView style={styles.scrollView}>
            {topTab === 'confirmed' &&
              (bookings.confirmedBookings.length ? (
                bookings.confirmedBookings.map((booking) => (
                  <BookingComponent
                    key={booking.id}
                    name={booking.otherUserFullName}
                    date={booking.scheduledStart}
                    duration={booking.scheduledDuration}
                  />
                ))
              ) : (
                <Text>You have no confirmed bookings.</Text>
              ))}
            {topTab === 'requested' &&
              (bookings.requestedBookings.length ? (
                bookings.requestedBookings.map((booking) => (
                  <BookingComponent
                    key={booking.id}
                    name={booking.otherUserFullName}
                    date={booking.scheduledStart}
                    duration={booking.scheduledDuration}
                  />
                ))
              ) : (
                <Text>You have no bookings requested.</Text>
              ))}
          </ScrollView>
        ) : (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="green" />
            <Text>Loading your bookings... </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default MySitsScreen;

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
    backgroundColor: 'rgba(255,255,255,0.9)',
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  topTabBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabView: {
    borderBottomWidth: 2,
    borderColor: ColorPalette.keppel,
  },
  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: 'grey',
  },
  scrollView: {},
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingCard: {
    borderRadius: 10,
    padding: 10,
    margin: 10,
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
  image: {
    borderRadius: 10,
    height: 70,
    width: 70,
  },
  imageAndTiles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginBottom: 5,
  },
  tile: {
    borderRadius: 10,
    height: 70,
    backgroundColor: ColorPalette.indianRed,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  tileText: {
    color: 'white',
    fontSize: 14,
  },
});
