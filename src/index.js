const { Boot } = require('micro-fame');
Boot({ rootDir: __dirname })
  .then(({ app }) => {
    console.log('Models:', Object.keys(app.get('models')));
    console.log('dbb', app.get('db'));
  })
  .catch(e => console.log('err', e));
