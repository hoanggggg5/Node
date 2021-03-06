import { Router } from 'express';
import { signin, signinWithGG, signup } from '../controllers/user';
import { checkAuth } from '../middlewares/checkAuth' 
const router = Router();

// resful API
router.post('/signin', checkAuth, signin);
router.post('/signingg', checkAuth, signinWithGG);
router.post('/signup', checkAuth, signup);

export default router;