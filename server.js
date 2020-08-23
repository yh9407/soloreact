const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes/index")(app);
const cors = require("cors");
const PORT = process.env.PORT || 5000;

//Router 등록

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
