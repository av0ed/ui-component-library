import express from "express";
import sequelize from "./config/config";

const app = express();
app.use(express.json());

// Basic route to test server
app.get("/", (_, res) => {
  res.send("Hello, world!");
});

// Sync database and start server
const startServer = async () => {
  try {
    //await sequelize.authenticate(); // Test the database connection
    console.log("Database connected successfully.");

    //await sequelize.sync(); // Sync all models (create tables)
    console.log("Database synced successfully.");

    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
