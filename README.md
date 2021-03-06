# challenge-personal-pay-api

## Descripción del proyecto
API de pronóstico del tiempo

## Índice
- [Requisitos para levantarlo de manera local](#requisitos-para-levantarlo-de-manera-local)
    - [Scripts disponibles](#scripts-disponibles)
- [CALLS POSIBLES](#calls-posibles)
    - [DE MANERA LOCAL](#de-manera-local)
    - [CALLS AL SERVICIO DESPLEGADO EN HEROKU](#calls-al-servicio-desplegado-en-heroku)
- [SWAGGER](#swagger)
- [LOGS](#logs)
    - [Niveles de log (Más alto a más bajo)](#niveles-de-log-más-alto-a-más-bajo)
- [APIS EXTERNAS UTILIZADAS](#apis-externas-utilizadas)
    - [IpApi](#ipapi)
    - [OpenWeatherMap](#openweathermap)  

## Requisitos para levantarlo de manera local
1. Crear el archivo .env en la carpeta raíz del proyecto y agregar lo siguiente:
    ```js
        //PUERTO QUE QUERRAMOS UTILIZAR
        PORT=3000
        //KEY DEL API DE OPENWEATHERMAP
        OWM_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    ```
2. En la terminal escribir lo siguiente:
```js
    //Instala los paquetes necesarios
    npm i
```
```js
    //Inicializa el API
    npm start
```
3. Recordar que para ejecutar los endpoints de manera local se debe agregar el header "x-forwarded-for" con un valor de IP válida.

### Scripts disponibles
```js
//Corre el servicio de manera local
    npm start 
```
```js
//Corre el servicio dde manera local con nodemon (Se reinicia automaticamente al realizar algún cambio en el código fuente)
    npm run dev 
```
```js
//Corre los test de integración de los distintos endpoints posibles
    npm run test 
```
```js
//Analiza e identifica problemas en el formato o patrones del código (Usado para mantener un código más limpio)
    npm run eslint 
```
```js
//Soluciona los errores posibles identificados por eslint
    npm run eslint-fix
```

## CALLS POSIBLES

### DE MANERA LOCAL
- Para poder ejecutar el endpoint levantando el servicio de manera local se debe utilizar el header 'x-forwarded-for' indicandole una IP 
- Dependiendo de la IP que le pasemos, ipapi nos va a mostrar los datos respectivos a dicha IP.

#### location (Datos a cerca de la ubicación del usuario)
```
curl --location --request GET 'http://localhost:3000/v1/location' \
--header 'x-forwarded-for: 123.21.54.5'
```
#### current:city (Tiempo actual del clima según ciudad)
```
curl --location --request GET 'http://localhost:3000/v1/current/buenos%20aires' \
--header 'x-forwarded-for: 123.21.54.5'
```
#### current (Tiempo actual del clima según ip location)
```
curl --location --request GET 'http://localhost:3000/v1/current' \
--header 'x-forwarded-for: 123.21.54.5'
```
#### forecast:city (Pronóstico a 5 días según ciudad)
```
curl --location --request GET 'http://localhost:3000/v1/forecast/buenos%20aires' \
--header 'x-forwarded-for: 123.21.54.5'
```
#### forecast (Pronóstico a 5 días según ip location)
```
curl --location --request GET 'http://localhost:3000/v1/forecast' \
--header 'x-forwarded-for: 123.21.54.5'
```

### CALLS AL SERVICIO DESPLEGADO EN HEROKU
- No hace falta utilizar el header 'x-forwarded-for' ya que utiliza la ip del usuario o su proveedor.

#### location (Datos a cerca de la ubicación del usuario)
```
curl https://challenge-personal-pay-api.herokuapp.com/v1/location
```
#### current:city (Tiempo actual del clima según ciudad)
```
curl https://challenge-personal-pay-api.herokuapp.com/v1/current/buenos%20aires
```
#### current (Tiempo actual del clima según ip location)
```
curl https://challenge-personal-pay-api.herokuapp.com/v1/current
```
#### forecast:city (Pronóstico a 5 días según ciudad)
```
curl https://challenge-personal-pay-api.herokuapp.com/v1/forecast/tokyo
```
#### forecast (Pronóstico a 5 días según ip location)
```
curl https://challenge-personal-pay-api.herokuapp.com/v1/forecast
```

## SWAGGER
- Podremos ver el swagger en el siguiente link: https://challenge-personal-pay-api.herokuapp.com/api-docs/

## LOGS
- Actualmente se encuentra configurado en el level debug para poder trackear todo log.
- Se puede cambiar el nivel de log desde el archivo de configuraciones en app/config/config.js
```js
    log:{
        level: 'debug', //nivel visible en el archivo de logs
        file_name: 'app.log' //nombre del archivo de logs
    }
```
#### Niveles de log (Más alto a más bajo)
```
{
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
}
```


## APIS EXTERNAS UTILIZADAS

### IpApi 
- [(LINK)](https://ipapi.co/api/#complete-location)
- Ubicación
    - API CALL: http://ip-api.com/json/{ip}

### OpenWeatherMap 
- [(LINK)](https://openweathermap.org/api)
- Tiempo actual  (https://openweathermap.org/current)
    - API CALL por ciudad: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    - API CALL por coordenadas: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

- Pronóstico a 5 días (https://openweathermap.org/forecast5)
    - API CALL por ciudad: https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    - API CALL por coordenadas: https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

