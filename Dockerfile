FROM node:current-buster-slim

RUN apt-get update && apt-get install -y  python3-pip 
RUN pip3 install flask requests python-dotenv pandas

WORKDIR /app

COPY . /app

RUN npm install

CMD sh startscript.sh