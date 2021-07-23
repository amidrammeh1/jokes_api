const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes_api', {
  useNewUrlParser: true,
  useUnifiedUrlParser: true,
})

.then(() => console.log("DB Connected"))
.catch(() => console.log("Error, unable to connect to DB"))