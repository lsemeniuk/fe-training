const Application = require('./framework/Application');
const PORT = process.env.PORT || 5000;
const userRouter = require('./src/user-router');
const parseJson = require('./framework/parseJson');
const parseUrl = require('./framework/parseUrl');

const app = new Application();

app.use(parseJson);
app.use(parseUrl('http://localhost:5000'));

app.addRouter(userRouter);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
