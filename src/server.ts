import express from 'express';
import "./db/connection";
import { getRepository } from 'typeorm';
import Tools from './models/Tool';

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ message: "Hello World!" });
}); 

app.post('/tools', async (request, response) => {
    const { title, link, description, tags } = request.body;

    const toolsRepository = getRepository(Tools);

    const tool = toolsRepository.create({
        title,
        link,
        description,
        tags
    });

    await toolsRepository.save(tool);

    return response.status(201).json(tool);
});

app.listen(3000);