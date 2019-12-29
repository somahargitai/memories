
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");
import People from '../models/People';

const refresh = (req, res) => {
  /* const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  } */

  People.findOne({ name: "Hargitai Soma" }).then(user => {
    if (user) {
      errors.email = "already exists";
      return res.status(400).json(errors);
      //  return res
      // .status(400)
      // .json({ email: 'Email already exists' });
    } else {
      console.log('HERE =====');
      console.log(req.body);
      const newPeople = new People({
        name: req.body.name,
        nick: req.body.nick,
        birth: req.body.birth,
        birthPlace: req.body.birthPlace,
        email: req.body.email,
      });

      // 10 character generating, salt is

      newPeople
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
    }
  });
};

export default refresh;