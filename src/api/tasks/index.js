import api from "../index.js";

// taskApi.js
export default {
    getTaskList: () => {
        return api.get(`task`);
    },
    getTask: (taskId) => {
        return api.get(`task/${taskId}`);
      },
    deleteTask: (taskId) => {
        return api.delete(`task/${taskId}`);
    },
    addTask: (task) => {
        return api.post(`task`, task);
    },
    updateTask: (task) => {
        return api.put(`task/${task.id}`, task);
    }
}
