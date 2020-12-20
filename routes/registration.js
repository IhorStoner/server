const { Router } = require('express');
const UserModel = require('../models/UserModel');

const registrationRouter = Router();

registrationRouter.post('/', async (req, res) => {
  const user = new UserModel(req.body);
  try {
    const result = await user.save();
    res.status(201).send({ created_user_id: result._id });
  } catch (e) {
    res.status(500).send({ error: 'Error:' + e });
  }
});

registrationRouter.get('/is_exist', async (req, res) => {
  const result = await UserModel.exists({ email: req.query.email });
  res.send({ is_exist: result })
});

module.exports = registrationRouter;