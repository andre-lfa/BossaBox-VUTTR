import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Tools {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    title: string;

    @Column()
    link: string;

    @Column()
    description: string;

    @Column('simple-array')
    tags: string[];
}