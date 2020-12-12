
const TEST_ENV_VAR = process.env.TEST_ENV_VAR;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("This is an environment variable: ", TEST_ENV_VAR);
    await sleep(5000);
  }
}

main();
