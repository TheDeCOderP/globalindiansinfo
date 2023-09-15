module.exports = {
    apps: [
      {
        name: 'gii-backend', // Replace with your application's name
        script: 'nodemon',     // Use nodemon as the script
        args: 'app.js',   // Replace with your application's entry file
        instances: 1,
        autorestart: true,
        watch: false,          // We'll let Nodemon handle file watching
        max_memory_restart: '100M', // Set your desired memory usage threshold
        env: {
          NODE_ENV: 'production', // Adjust as needed
          PORT: 8190,            // Specify your desired port here
        },
      },
    ],
  };
  