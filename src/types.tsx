import { IUser, IBooking } from './interfaces';

export type user = {
  logged: boolean;
  logging: boolean;
  userInfo: IUser | undefined;
};

export type bookings = {
  requestedBookings: IBooking[];
  confirmedBookings: IBooking[];
};
