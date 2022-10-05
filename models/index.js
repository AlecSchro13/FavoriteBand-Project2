const User = require('./User');

module.exports = { User };
const app = express()

app.get('/', (req, res) => {
  res.send('Welcome')
})
console.log(User)
app.listen(3000)