/*import auth from '@react-native-firebase/auth';
const authentication=({email, pass})=>{
     
auth()
  .createUserWithEmailAndPassword(email, pass)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });

}
 authentication({email:values.email,pass:values.password}).then(() => {
        // Handle successful user creation
        console.log('User created successfully!');
      })
      .catch((error) => {
        // Handle error
        console.error(error.message);
      })
  }
export default authentication;
*/