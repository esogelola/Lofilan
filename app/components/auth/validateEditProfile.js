export default function validateEditProfile(values) {
  let errors = {};
  // Name Errors
  if (!values.name) {
    errors.name = 'A username is required.';
  }

  //Email Errors
  if (!values.email) {
    errors.email = 'A email is required.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Your email is invalid.';
  }

  if (!values.currentPassword) {
    //Password Errors
    errors.currentPassword = 'A current password is required.';
  } else if (values.currentPassword.length < 6) {
    errors.currentPassword =
      'Your currrent password password must be at least 6 characters';
  }
  if (values.newPassword.length < 6) {
    errors.newPassword = 'Your password must be at least 6 characters';
  }
  return errors;
}
