const Note = require("../models/Note");

exports.getNote = async (req, res) => {
  const note = await Note.findOne({
    userId: req.user._id,
  });

  res.json(note || { content: "" });
};

exports.saveNote = async (req, res) => {
  const note = await Note.findOneAndUpdate(
    { userId: req.user._id },
    { content: req.body.content },
    {
      upsert: true,
      new: true,
    }
  );

  res.json(note);
};