#  Sunrise and sunset application

## Requirements
This application requires Docker.

[Get Docker](https://docs.docker.com/get-docker/)

## How to setup

### 1. Clone this repository
```
$ git clone 
```
### 2. Build Docker image
```
$ cd datasentics
$ docker build -t <IMAGE TAG> .
```

### 3. Run Docker image and map ports

```
$ docker run -p 3000:3000 <IMAGE TAG>
```
### 4. Check with web browser
open `http://localhost:3000/` with Web browser to check application is working.
