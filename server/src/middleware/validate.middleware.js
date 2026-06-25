const validateRegister = (
  req,
  res,
  next
) => {
  const {
    name,
    username,
    email,
    mobile,
    password,
  } = req.body;

  if (
    !name ||
    !username ||
    !email ||
    !mobile ||
    !password
  ) {
    return res.status(400).json({
      success: false,
      message:
        "All fields are required",
    });
  }

  next();
};

module.exports = {
  validateRegister,
};