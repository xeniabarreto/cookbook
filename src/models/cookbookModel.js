const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cookbook = new Schema(
  {
    id: Schema.Types.ObjectId,

    title: {
      type: String,
    },

    author: {
      type: String,
    },

    recipes_type: {
      type: String,
    },

    cooking_time: {
      type: String,
    },

    servers: {
      type: Number,
    },

    ingredients: {
      type: Array,
    },

    method: {
      type: String,
    },
  },
  {
    collation: { locale: 'en', strength: 2 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('cookbook', cookbook);
