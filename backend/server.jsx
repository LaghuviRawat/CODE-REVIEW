require('dotenv').config()
const app = require('./src/app.jsx');



app.listen(3000,() => {
      console.log('Server is running on http://localhost:3000')
})