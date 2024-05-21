import express, { Request, Response } from 'express';
import { CommonEngine } from '@angular/ssr';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';

const app = express();
const PORT = process.env.PORT || 4000;

function run(): void {
    const server = app();

    const serverDistFolder = dirname(fileURLToPath(import.meta.url));
    const browserDistFolder = resolve(serverDistFolder, '../browser');
    const indexHtml = join(serverDistFolder, 'index.html'); // Change to index.html

    const commonEngine = new CommonEngine();

    server.set('view engine', 'html');
    server.set('views', browserDistFolder);

    server.use(express.static(browserDistFolder, { maxAge: '1y' }));
    server.use(express.urlencoded({ extended: true }));

    // Serve the index.html file directly
    server.get('/', (req: Request, res: Response) => {
        res.sendFile(indexHtml);
    });

    // Handle POST request for form submission
    server.post('/submit_registration', (req: Request, res: Response) => {
        // Handle form submission here
        const { firstname, lastname, gender, course, idnumber, email, password, confirmpassword } = req.body;
        // Perform form validation and database operations
        // Respond accordingly
        res.send('Registration submitted successfully!');
    });

    server.listen(PORT, () => {
        console.log(`Node Express server listening on http://localhost:${PORT}`);
    });
}

run();
