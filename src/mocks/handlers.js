import { rest } from 'msw';

export const handlers = [
    // Handles a GET /user request
    rest.get('http://localhost:8080/2/pets', (req, res, ctx) => {
        // Persist user's authentication in the session
        return res(
            ctx.status(200),
            ctx.json([{
                id: 1,
                name: 'test1',
                sex: 'male',
                birthday: '10.12.2020'
            },
            {
                id: 2,
                name: 'test2',
                sex: 'male',
                birthday: '10.12.2020'
            },
            {
                id: 3,
                name: 'test3',
                sex: 'male',
                birthday: '10.12.2020'
            }
            ]))
    })]
