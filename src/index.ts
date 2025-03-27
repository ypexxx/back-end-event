import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/api";
import db from "./utils/database";
import docs from "./docs/route";

async function init() {
    try {
        const result = await db();
        console.log("database status: ", result);

        const app = express();
        const PORT = 3000;

        app.use(cors());

        app.get('/', (req, res) => {
            res.status(200).json({
                message: "Server is running",
                data: null,
            });
        });

        app.use(bodyParser.json());
        app.use('/api', router);
        docs(app);

        app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

init();

