module.exports = {
  upload: async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: 'Favor fornecer um arquivo válido!' });
    }
    const file = req.file.buffer;
    try {
      const base64File = file.toString('base64');
      return res.status(200).json({ img: base64File });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
