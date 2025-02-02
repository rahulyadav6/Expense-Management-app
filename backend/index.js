const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mainRouter = require("./routes/index");


app.use(express.json());

app.get('/', (req, res) => {
    res.json({ msg: "Welcome to Expense Management App" });
});

app.use("/api/v1", mainRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
