import { Router } from 'express';

import UserController from './api/controllers/UserController';
// import authMiddleware from './app/middlewares/auth';

const routes = new Router();


routes.get('', (req, res) => {
    res.render('login');
});

routes.get('/signup', (req, res) => {
    res.render('signup');
});

routes.post('/users', UserController.store);

routes.get('/users/getById', UserController.getById);

routes.get('/users/getByEmail', UserController.getByEmail);

routes.delete('/users/delete', UserController.delete);


export default routes;