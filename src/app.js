import express from 'express';
import mongoose from 'mongoose';
import taskRoutes from './routes/task.routes.js';

const app = express();

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/taskQueue', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use the task routes
app.use('/api/v1/', taskRoutes);

export default app;
