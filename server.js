
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("This is an environment variable: ", process.env.TEST_ENV_VAR);
    await sleep(5000);
  }
}

main();
