import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useState} from 'react';

export const UseAuth = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  function onAuthStateChanged(currentUser: FirebaseAuthTypes.User | null) {
    setUser(currentUser || null);
  }

  auth().onAuthStateChanged(onAuthStateChanged);

  return {user, isAuth: Boolean(user)};
};
