import express, { Application } from "express";
import rateLimit from 'express-rate-limit';
import morgan from "morgan";
import dotenv from 'dotenv';
import { Signale } from "signale";
import { businessRouter } from "./bussiness/infraestructure/routes/businessRoutes";

dotenv.config();

const app:Application = express();

const limiter = rateLimit({
    windowMs: 1000, // Milisegundos
    max: 100, // Número máximo de peticiones permitidas en la ventana
});

const signale = new Signale();

const PORT = process.env.PORT || 3000;

app.use(limiter);

app.use(morgan('dev'));

app.use(express.json());

app.use('/business',businessRouter);

app.use((req, res, next) => {
    res.status(404).json({ error: 'ROUTE HAS NOT FOUND' });
});

app.listen(PORT , () => {
    signale.success('Servidor Corriendo en el puerto'+PORT);
});
