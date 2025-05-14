const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000', // frontend URL
    credentials: true
  }));
app.use(express.json());

// Routes
app.use('/api/helpers', require('./routes/helpers'));
app.use('/api/seekers', require('./routes/seekers'));
app.use('/api/messages', require('./routes/messages'));

app.get('/', (req, res) => {
  res.send('HelperSeeker backend is running.');
});

sequelize.sync()
  .then(() => {
    console.log('Database synced successfully.');
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
  })
  .catch(err => console.error('Failed to sync database:', err));
