const mongoose = require('mongoose');
const mongoosePaginate = require ('mongoose-paginate')

async function connectToMongoDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/node1');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

connectToMongoDB();

mongoosePaginate.paginate.options={
  limit:1,
  lean:false
}

mongoose.mongoosePaginate = mongoosePaginate;

module.exports = mongoose;
