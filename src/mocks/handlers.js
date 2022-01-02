import { rest } from 'msw';
import { petNotes, pets } from './db';

export const handlers = [
    // Handles a GET /user request
    rest.get('http://localhost:8080/pets/3', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(pets[2]))
    }),
    rest.get('http://localhost:8080/pets/3/notes', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(petNotes))
    }),
    rest.get('http://localhost:8080/users/2/pets', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(pets))
    }),
    rest.post('http://localhost:8080/users/2/pets', (req, res, ctx) => {
        pets.push(req.body);
        return res(
            ctx.status(200),
        )
    }),
    rest.post('http://localhost:8080/pets/3/notes', (req, res, ctx) => {
        petNotes.push(req.body);
        return res(
            ctx.status(200),
        )
    }),
]
