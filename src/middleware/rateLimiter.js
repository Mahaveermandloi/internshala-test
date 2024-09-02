import Task from '../models/Task.model.js';

const rateLimiter = async (req, res, next) => {
    const { user_id } = req.body;
    const now = new Date();

    // Check the last 20 tasks within the last minute
    const oneMinuteAgo = new Date(now.getTime() - 60 * 1000);
    const taskCount = await Task.countDocuments({ user_id, timestamp: { $gte: oneMinuteAgo } });

    if (taskCount >= 20) {
        return res.status(429).json({ message: 'Rate limit exceeded: Max 20 tasks per minute.' });
    }

    // Check if the last task was within the last second
    const oneSecondAgo = new Date(now.getTime() - 1000);
    const lastTask = await Task.findOne({ user_id, timestamp: { $gte: oneSecondAgo } });

    if (lastTask) {
        return res.status(429).json({ message: 'Rate limit exceeded: Max 1 task per second.' });
    }

    next();
};

export default rateLimiter;
