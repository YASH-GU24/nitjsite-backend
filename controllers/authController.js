const Faculty = require("../models/Faculty");
const PhdScholar = require("../models/PhdScholar");
const Sessions = require("../models/Session");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

module.exports.signInAuthentication = async function (req, res, next) {
  const id = req.params.id;
  const cookie = req.cookies;
  var flag = false;
  if (cookie) flag = true;

  try {
    if (flag) {
      const sessionID = cookie.session;

      let session = await Sessions.findById(sessionID);
      if (session) {
        if (session.user_id == id) {
          req.user = {
            isFaculty: true,
            login: true,
          };
        } else {
          req.user = {
            isFaculty: false,
            login: true,
          };
        }

        next();
        return;
      } else {
        req.user = {
          isFaculty: false,
          login: false,
        };
      }
    }
  } catch (error) {
    console.log(error);
  }

  next();
};

module.exports.createSession = async function (req, res) {
  const dept = req.params.dept;
  try {
    const User = await Faculty.find({ email: req.body.email });
    if (User.length == 0) {
      return res.redirect(`http://localhost:3000/dept/${dept}/login/failed`);
    } else {
      const hash = User[0]?.password;
      bcrypt.compare(req.body.password, hash, async function (err, result) {
        if (result) {
          const session = await Sessions.create({
            user_id: User[0]?._id,
          });
          session.save((err, id) => {
            return res
              .redirect(`http://localhost:3000/dept/${dept}/Home/${id.id}`);
          });
        } else {
          return res.redirect(
            `http://localhost:3000/dept/${dept}/login/failed`
          );
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.deleteSession = async (req, res) => {
  const cookie = req.cookies;
  const dept = req.params.dept;
  if (!cookie) return res.status(400).json({ status: false });
  const sessionID = cookie.session;
  if (!sessionID) return res.status(400).json({ status: false });
  try {
    console.log(sessionID);
    await Sessions.deleteOne({ _id: mongoose.Types.ObjectId(sessionID) });

    // return res
    //   .cookie("session", sessionID, { expires: new Date().getTime(), withCredentials: true })
    //   .status(200);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false });
  }
};
