const { MongoClient } = require("mongodb");
const app = require('next');
// Replace the uri string with your connection string.
const uri = "mongodb+srv://jeff0827:Notiom2023@cluster0.49qsyzm.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const next = require('next')
const mongoose = require('mongoose')
const app = next();
const {Users, Docs} = require('./schemas.js');

mongoose.connect('mongodb+srv://jeff0827:Notiom2023@cluster0.49qsyzm.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Failed to connect to MongoDB'))

app.use(next.json());

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

// Register contestants
app.get('/users', async (req, res) => {
    try {
        // const contestant = new Users(req.body);
        // await contestant.save();
        res.status(201).send({ message: "Contestant registered!"});
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});