const app = require('./app');
const config = require('./utils/config');


app.listen(config.PORT, () => {
    console.log(`Server runing on port ${config.PORT}`);
})