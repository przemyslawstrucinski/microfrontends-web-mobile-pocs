const Metro = require('metro');
const path = require('path');
const config = require('./metro.config');

const PORT = 8091;

async function runServer() {
  const server = await Metro.createServer({
    ...config,
    projectRoot: path.resolve(__dirname),
    watchFolders: [path.resolve(__dirname)],
  });

  await server.serve({
    port: PORT,
  });

  console.log(`\n✅ Search MFE Metro server running on port ${PORT}`);
  console.log(`   http://localhost:${PORT}/mf-manifest.json\n`);
}

runServer().catch((error) => {
  console.error('Failed to start Metro server:', error);
  process.exit(1);
});

