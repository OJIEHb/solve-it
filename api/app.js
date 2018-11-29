const express = require('express');
const cors = require('cors');
const Routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
new Routes().mount(app);

app.listen(3000, () => console.log('Listening on 3000...'));
