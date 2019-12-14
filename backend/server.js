const express = require('express');
const cors = require('cors');
const passport = require('passport');
const { establishAuthStrategy } = require('./api/authentication/jwtStrategy');
const config = require('./config/envConfig');
const connectToDatabase = require('./config/connectToDb');
const path = require('path');

const strategy = establishAuthStrategy().generate();
const server = express();

server.use(express.static(path.join(__dirname, '../dist/czWordGame')));
server.use(cors({ origin: '*' }));
passport.use(strategy);
server.use(passport.initialize());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/', require('./api/routes'));

server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/czWordGame/index.html'));
})


connectToDatabase(config.DB.URL);
server.listen(config.APP.PORT, () => {
  console.log(`Server is running on ${config.APP.PORT}`);
});
