import React, { createContext, useState } from 'react';

import { user } from '../types';

export const userContext = createContext();

export const UserProvider = (props: any) => {
  const [user, setUser] = useState<user | undefined>({
    logged: false,
    logging: false,
    userInfo: undefined,
  });

  return (
    <userContext.Provider value={[user, setUser]}>
      {props.children}
    </userContext.Provider>
  );
};
