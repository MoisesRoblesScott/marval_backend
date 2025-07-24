const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorr, boomError, ormError } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

const whitelist = ['http://localhost:8080', 'http://localhost:3000', 'http://localhost:5173'];

const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
  credentials: true
};

app.use(cors(options));

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(ormError);
app.use(boomError);
app.use(errorr);


app.listen(port, () => {
  console.log('Mi puerto' +  port);
});
