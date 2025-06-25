const express = require('express');
const router = express.Router();
const Youtube = require('../models/Youtube');

// Obtener todos los videos
router.get('/', async (req, res, next) => {
  try {
    const videos = await Youtube.find();
    res.json(videos);
  } catch (err) {
    next(err);
  }
});

// Agregar un nuevo video
router.post('/', async (req, res, next) => {
  try {
    const video = new Youtube(req.body);
    await video.save();
    res.status(201).json({ message: 'Video agregado', video });
  } catch (err) {
    next(err);
  }
});

// Actualizar un video por ID
router.put('/:id', async (req, res, next) => {
  try {
    const video = await Youtube.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!video) {
      return res.status(404).json({ message: 'Video no encontrado' });
    }
    res.json({ message: 'Video actualizado', video });
  } catch (err) {
    next(err);
  }
});

// Eliminar un video por ID
router.delete('/:id', async (req, res, next) => {
  try {
    const video = await Youtube.findByIdAndDelete(req.params.id);
    if (!video) {
      return res.status(404).json({ message: 'Video no encontrado' });
    }
    res.json({ message: 'Video eliminado' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;