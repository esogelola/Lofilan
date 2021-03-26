import app from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import '@react-native-firebase/storage';

class Firebase {
  constructor() {
    this.app = app;
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
  }

  async register(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password,
    );
    return newUser.user.updateProfile({
      displayName: name,
    });
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    return this.auth.signOut();
  }

  resetPassword(email) {
    return this.auth.sendPasswordResetEmail(email);
  }
}

const firebase = new Firebase();
export default firebase;
