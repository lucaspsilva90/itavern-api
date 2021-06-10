const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports = {

  login: async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Por favor, forneça e-mail e senha para realizar o login.' });
    }

    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ message: 'Usuário ou senha inválidos' });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Usuário ou senha inválidos' });
      }
      req.session.userId = user.id;
      req.session.user = user;
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
    return res.status(200).json({ message: 'Login realizado com sucesso.' });
  },
};
