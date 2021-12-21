const camelCase = require('lodash/camelCase');

//Get the middlewares name in the context file and generates an array of middlewares depending on the endpoint that is using.
function getMiddlewares(middlewareNames) {
  const arrayOfMiddleware = [];
  middlewareNames.forEach((name) => {
    if(typeof(name) === typeof({})){
      //if we have to iterate some middlewares call we can write {repeat: $value, array:[$name_of_middlewares]}
      for(let i = 0; i < name.repeat; i++){
          name.array.forEach((midName) => {
              const middleware =  typeof midName === 'string' ? require(`./../middlewares/${midName}`)[camelCase(midName)] : midName; // eslint-disable-line
              arrayOfMiddleware.push(middleware);
          })
      }
    }else{
      const middleware =  typeof name === 'string' ? require(`./../middlewares/${name}`)[camelCase(name)] : name; // eslint-disable-line
      arrayOfMiddleware.push(middleware);
    }
  });
  return arrayOfMiddleware;
}

module.exports.getMiddlewares = getMiddlewares;
