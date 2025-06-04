const request = require('supertest');
const app = require('../app');

describe('GET /etudiant/:id', () => {
    it('should return the exact student object', async () => {
        const expectedStudent = { id: 1, name: 'Alain', age: 22 };

        const response = await request(app).get('/etudiant/1');

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expectedStudent);
    });
    it('should return the exact student object', async () => {
        const expectedStudent = { id: 2, name: 'Céline', age: 40 };

        const response = await request(app).get('/etudiant/2');

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expectedStudent);
    });
    it('should return an error if there is no student with this ID', async () => {

        const response = await request(app).get('/etudiant/999');
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({ error: "Étudiant non trouvé" });
    });
});