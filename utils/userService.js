module.exports = {

    setBirthDateToISOString: (user, stringDate) => {
        user.birthdate = new Date(stringDate).toISOString();
        return user;
    },
    objectParametersValidation: (user) => {
        const errorFields = []
        const validation = Object.keys(user).map(function (key, index) {
            const parameters = ["name", "birthdate", "email", "password", "nickname", "address_code", "address", "number", "complement", "district", "city", "state"];
 
            if (key != parameters[index]) {
                errorFields.push(key);
                return false
            } else {
                return true;
            }
        });
        const status = validation.includes(false);
        return {
            status,
            errorFields
        };
    }
}