const mongoose = require('mongoose');

// eslint-disable-next-line no-undef
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.set('strictQuery', false);

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected database...');
  } catch (error) {
    console.log('Erro: ', error.message);
  }
};

module.exports = { connect };
