const path = require('node:path');
const concurrently = require('concurrently');

const { result } = concurrently(
    [
        'npm:watch-*',
        { command: 'npx nodemon', name: 'server', cwd: '.'},
        { command: 'npx vite preview', name: 'client', cwd: '../client'},
    ],
    {
        prefix: '',
        killOthers: ['failure', 'success'],
        restartTries: 3,
        cwd: path.resolve(__dirname, 'scripts'),
    },
);

// result.then(success, failure);