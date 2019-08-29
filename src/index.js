const app = require('./app');

async function main(){
  await app.listen(app.get('port'));
  console.log(`server runs in port ${app.get('port')}`);
}

main();