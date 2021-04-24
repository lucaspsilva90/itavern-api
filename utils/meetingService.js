module.exports = {
  objectParametersValidation: (meeting) => {
    const errorFields = [];
    const validation = Object.keys(meeting).map((key) => {
      const parameters = ['group_id', 'name', 'date', 'location', 'observations'];
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
