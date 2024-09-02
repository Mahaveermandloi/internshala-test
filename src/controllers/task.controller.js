import Task from '../models/Task.model.js';
import fs from 'fs';
import path from 'path';

export const processTask = async (req, res) => {
    const { user_id } = req.body;

    // Create a new task in the database
    const task = new Task({ user_id });
    await task.save();

    // Simulate task processing delay (for example purposes)
    setTimeout(async () => {
        task.status = 'completed';
        await task.save();

        // Log the task completion
        const logMessage = `${task.user_id}-task completed at-${task.timestamp}\n`;
        fs.appendFile(path.join(path.resolve(), 'logs/task.log'), logMessage, (err) => {
            if (err) console.error('Failed to log task:', err);
        });
    }, 1000);

    res.status(202).json({ message: 'Task queued for processing.', task_id: task._id });
};
