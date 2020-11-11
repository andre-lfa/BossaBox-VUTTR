import Router from 'express';
import ToolsController from './controllers/ToolsController';

const routes = Router();

routes.post('/tools', ToolsController.create);

export default routes;