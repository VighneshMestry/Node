const express = require("express");

const app = express();
const PORT = 8000;

const { handleMongoDbConnection } = require('./connections');
const userRouter = require('./routes/users')

handleMongoDbConnection();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/users/:id', userRouter);

app.listen(PORT, () => console.log(`Server Connected at port ${PORT}`));
