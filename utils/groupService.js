module.exports = {
  objectParametersValidation: (group) => {
    const errorFields = [];
    const validation = Object.keys(group).map((key) => {
      const parameters = ['owner_user', 'name', 'game_id', 'max_players', 'chat_integration'];
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
}