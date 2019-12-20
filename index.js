const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URI || `mongodb://localhost:27017/me-for-you`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .catch(error => console.log("Mongoose connection Error", error));

const MyModel = mongoose.model('Test', new mongoose.Schema({ name: String }));
// Works
MyModel.findOne(function(error, result) { /* ... */ });

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`)
});