const BASE_URL: string = 'http://api-staging.joinbubble.co.uk';

export const login = async (email: string, password: string) => {
  const endpoint: string = '/auth/local';
  await fetch(`${BASE_URL}${endpoint}?email=${email}&password=${password}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.token);
      getUser(data.token);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUser = async (token: string) => {
  const endpoint: string = '/api/user';
  const user = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
  return user;
};

export const getSitters = async (token: string) => {
  const endpoint: string = '/api/search';
  const sitters = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
  return sitters;
};

export const getBookings = async (token: string) => {
  const endpoint: string = '/api/booking/activesummary';
  const bookings = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
  return bookings;
};

export const getRandomImage = async () => {
  const image = await fetch(
    'https://source.unsplash.com/collection/9629809/500x500'
  );
  return image;
};
