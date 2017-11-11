const { Boot } = require('micro-fame');
Boot({ port: 8080, rootDir: __dirname })
  .then(({ app }) => {
    console.log('dbb', Object.keys(app.get('models')));
    console.log('dbb', app.get('db'));
  })
  .catch(e => console.log('err', e));
