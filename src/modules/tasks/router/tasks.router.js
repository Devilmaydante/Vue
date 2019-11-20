/**
 * Module dependencies.
 */
import tasks from '../views/tasks.view.vue';
import task from '../views/task.view.vue';

/**
 * Router configuration
 */
export default [
  {
    path: '/tasks',
    name: 'Tasks',
    component: tasks,
    meta: {
      icon: 'tasks',
    },
  }, {
    path: '/task',
    name: 'task',
    component: task,
    meta: {
      display: false, // hide any time
    },
  }, {
    path: '/task/:id',
    name: 'task',
    component: task,
    meta: {
      display: false, // hide any time
    },
  },
];
