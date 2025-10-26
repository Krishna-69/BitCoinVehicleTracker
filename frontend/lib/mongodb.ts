// db/connection.ts

import mongoose from 'mongoose';

const Connection = async (): Promise<void> => {
    const URL = "mongodb+srv://admin:krishnarstg_69@cluster0.5w2z6zh.mongodb.net/BitCoinVehicleTracking";

    try {
        await mongoose.connect(URL);
        console.log("Database connection established");
    } catch (err) {
        console.error("Error while connecting to database", err);
    }
};

export default Connection;
