import { User } from "../models/user.models.js";

export const getUser = async (req, res) => {
  try {
    const data = await User.find(); 
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const postUser = async (req, res) => {
  try {
    const newUser = req.body;
    const postNewUser = await User(newUser);
    res.status(200).json(postNewUser);
    postNewUser.save();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUser = await User.findOneAndUpdate(id, req.body, { new: true });
    res.status(200).json(updateUser);
    updateUser.save();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
export const deleteUser = async (req, res) => {
    try {
      const id = req.params.id;
      const deleteUser = await User.findOneAndDelete(id,{ new: true });
      res.status(200).json(deleteUser);
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
  
