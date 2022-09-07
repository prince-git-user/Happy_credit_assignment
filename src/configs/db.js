const mongoose = require("mongoose");

// step 1 :- connect to mongodb
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://prince_111:0AL9kfvKBZI7t8Xj@cluster0.pkgyp3h.mongodb.net/test"
  );
};

module.exports = connect;
//pass 0AL9kfvKBZI7t8Xj
//user prince_111