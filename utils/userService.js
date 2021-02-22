module.exports = {

  setBirthDateToISOString: (userToConvert, stringDate) => {
    const user = userToConvert;
    user.birthdate = new Date(stringDate).toISOString();
    return user;
  },
  objectParametersValidation: (user) => {
    const errorFields = [];
    const validation = Object.keys(user).map((key) => {
      const parameters = ['name', 'birthdate', 'email', 'password', 'nickname', 'address_code', 'address', 'number', 'complement', 'district', 'city', 'state','address','address_code', 'user_activated'];
      if (!parameters.includes(key)) {
        errorFields.push(key);
        return false;
      }
      return true;
    });
    const status = validation.includes(false);
    return {
      status,
      errorFields,
    };
  },
};
