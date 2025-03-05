const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      webSocketURL: 'wss://localhost:8080/ws', // Use WSS for secure WebSockets
    },
  },
});
