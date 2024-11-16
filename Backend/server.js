require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const audienceRoutes = require('./routes/audienceRoutes');
const campaignRoutes = require('./routes/campaignRoutes');
const communicationLogRoutes = require('./routes/communicationLogRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/hello',(req,res)=>{
      res.status(200).json({message: 'Hello api'});
})
// CORS configuration options
const corsOptions = {
  origin: 'http://localhost:3000/home', // Specify the allowed origin
  methods: ['GET', 'POST'], // Specify allowed HTTP methods
  allowedHeaders: ['Content-Type'], // Specify allowed headers
  credentials: true, // Allow credentials (cookies, authentication)
};

// Apply CORS middleware
app.use(cors(corsOptions));
// app.use(cors());
// app.use(express.json());

// Custom headers for security
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/audience', audienceRoutes);
app.use('/api/campaigns', campaignRoutes);
app.use('/api/communications', communicationLogRoutes);

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
