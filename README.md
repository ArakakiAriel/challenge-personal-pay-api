# challenge-personal-pay-api

## Descripción del proyecto
API de pronóstico del tiempo


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



## IpApi (https://ipapi.co/api/#complete-location)
- Ubicación
    - API CALL: http://ip-api.com/json/{ip}


## OpenWeatherMap (https://openweathermap.org/api)
- Tiempo actual  (https://openweathermap.org/current)
    - API CALL por ciudad: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    - API CALL por coordenadas: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

- Pronóstico a 5 días (https://openweathermap.org/forecast5)
    - API CALL por ciudad: https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    - API CALL por coordenadas: https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}



# CALLS POSIBLES

## DE MANERA LOCAL

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
curl --location --request GET 'http://localhost:3000/v1/forecast' \
--header 'x-forwarded-for: 123.21.54.5'
```
#### forecast (Pronóstico a 5 días según ip location)
```
curl --location --request GET 'http://localhost:3000/v1/forecast/buenos%20aires' \
--header 'x-forwarded-for: 123.21.54.5'
```

