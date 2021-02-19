import React from 'react';
import auth from '@react-native-firebase/auth';

function useAuth() {
  const [authUser, setAuthUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  function onAuthStateChanged(user) {
    setAuthUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }
  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return [initializing, authUser, setAuthUser];
}

export default useAuth;
