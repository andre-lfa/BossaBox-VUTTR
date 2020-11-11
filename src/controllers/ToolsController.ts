import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Tools from '../models/Tool';

export default {
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
    }
}