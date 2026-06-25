const User = require("../models/User");
const bcrypt = require("bcryptjs");

const generateToken = require(
  "../utils/generateToken"
);

exports.registerUser = async (
  req,
  res
) => {
  try {
    const {
      name,
      username,
      email,
      mobile,
      password
    } = req.body;

    const userExists =
      await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message:
          "User already exists"
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      username,
      email,
      mobile,
      password: hashedPassword
    });

    res.status(201).json({
      success: true,
      token: generateToken(
        user._id
      ),
      user
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.loginUser = async (
  req,
  res
) => {
  try {
    const { email, password } =
      req.body;

    const user =
      await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const match =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!match) {
      return res.status(401).json({
        message:
          "Invalid credentials"
      });
    }

    res.status(200).json({
      token: generateToken(
        user._id
      ),
      user
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};