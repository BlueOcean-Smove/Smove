import express from 'express';

import {
  getUserInfo,
  createUser,
  updateUser,
  changeAccess
} from './controllers/users.js';

import {
  getSmove,
  createSmove
} from './controllers/smove.js';

import {
  createList,
  updateList,
  deleteList
} from './controllers/lists.js';

import {
  createTask,
  updateTask,
  deleteTask
} from './controllers/tasks.js';

const router = express.Router();

router.get('/:id', getUserInfo);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id/:id', changeAccess);

router.get('/:id', getSmove);
router.post('/', createSmove);

router.post('/', createList);
router.patch('/:id', updateList);
router.delete('/:id/:id', deleteList);

router.post('/', createTask);
router.patch('/:id', updateTask);
router.delete('/:id/:id', deleteTask);

export default router;