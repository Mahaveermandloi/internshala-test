import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    status: { type: String, default: 'queued' }, // queued, processing, completed
});

const Task = mongoose.model('Task', taskSchema);
export default Task;
