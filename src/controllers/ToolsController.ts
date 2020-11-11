import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Tools from '../models/Tool';

export default {
    
    async index(request: Request, response: Response) {
        const toolsRepository = getRepository(Tools);

        const tools = await toolsRepository.find();

        return response.status(200).json(tools);
    },

    async create(request: Request, response: Response) {
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
    },

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        
        const toolsRepository = getRepository(Tools);

        toolsRepository.delete(id);

        return response.status(200).json({Message: `Ferramenta com o ID ${id} deletada da base de dados.`});
    }
}