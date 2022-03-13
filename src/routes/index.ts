import { Router } from 'express';
import {
  createUser,
  getUser,
  getUserById,
} from '../controllers/index.controllers';

const router = Router();

router.get('/users', getUser);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
// router.put('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);

export default router;
