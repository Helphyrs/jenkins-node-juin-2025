const request = require('supertest');
const app = require('./app');

describe('GET /etudiant/:id', () => {
    it('should return a student with correct format', async () => {
        const response = await request(app).get('/etudiant/1');

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id', '1');
        expect(response.body).toHaveProperty('name', "Alain");
        expect(response.body).toHaveProperty('age', 22);
        expect(typeof response.body.age).toBe('number');
    });
    it('should return a student with correct format', async () => {
        const response = await request(app).get('/etudiant/2');

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id', '2');
        expect(response.body).toHaveProperty('name', "Céline");
        expect(response.body).toHaveProperty('age', 40);
        expect(typeof response.body.age).toBe('number');
    });
    it('should return 404 if student not found', async () => {
        const response = await request(app).get('/etudiant/999');

        expect(response.statusCode).toBe(404);
        expect(response.body).toHaveProperty('error');
    });
});
