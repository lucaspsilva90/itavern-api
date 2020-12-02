module.exports = {

    setBirthDateToISOString: (user, stringDate) => {
        user.birthdate = new Date(stringDate).toISOString();
        return user;
    }
}