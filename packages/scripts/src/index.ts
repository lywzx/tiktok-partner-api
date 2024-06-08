import { init } from './init';
import { saveRunningState } from './util/running-status';

init();

process.on('uncaughtException', async (e) => {
  await saveRunningState();
  console.error(e);
});
