const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
import People from '../models/People';

const refresh = (req, res) => {
  console.log('SABADAAAAAAAAAAAAAAAAAAAAAAAA');
  console.log(req.body.nick);
  console.log(req.body.name);

  const errors = {};

  /* const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  } */

  People.findOne({
    name: req.body.name,
    nick: req.body.nick,
  }).then(user => {
    if (user) {
      errors.message = 'already exists';
      return res.status(400).json(errors);
    } else {
      console.log('HERE =====');
      console.log(req.body);
      const newPeople = new People({
        name: req.body.name,
        nick: req.body.nick,
        description: req.body.description,
        email: req.body.email,
        birthDate: req.body.birthDate,
        birthPlace: req.body.birthPlace,
        deathDate: req.body.deathDate,
        deathPlace: req.body.deathPlace,
      });

      newPeople
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    }
  });
};

export default refresh;
