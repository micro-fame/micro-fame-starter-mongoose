module.exports = {
  firstName: String,
  lastName: String,
  no: Number,
  obj: {
    key1: String,
    key2: { type: String, required: true }
  },
  arr: [{
    arr1: String,
    arr2: { type: Number, required: true }
  }]
};
