import express from 'express';
const app = express();

import customerRoutes from './routes/customer.js';
import employeeRoutes from './routes/employee.js';

import database from './config/database.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 4000;
database();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: ["http://localhost:3000",],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}));

app.use("/customer", customerRoutes);
app.use("/employee", employeeRoutes);

//def routes
app.get('/', (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Your server is up and running...",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
