import Router from 'express';
import ToolsController from './controllers/ToolsController';

const routes = Router();

routes.post('/tools', ToolsController.create);
routes.get('/tools', ToolsController.index);
routes.delete('/tools/:id', ToolsController.delete);

export default routes;