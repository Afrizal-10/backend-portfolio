import Testimoni from "../models/Testimoni.js";

// GET testimoni
export const getTestimoni = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const data = await Testimoni.find().sort({createdAt: -1}).limit(limit);
    res.json(data);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
};

// POST testimoni baru
export const createTestimoni = async (req, res) => {
  try {
    const {name, message} = req.body;
    if (!name || !message) {
      return res.status(400).json({error: "Nama dan pesan wajib diisi"});
    }

    const newTestimoni = new Testimoni({name, message});
    await newTestimoni.save();
    res.status(201).json(newTestimoni);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
};
