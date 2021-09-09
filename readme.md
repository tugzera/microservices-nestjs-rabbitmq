# STEP-1

RUN DOCKER COMPOSE

sudo docker-compose up -d --build

# STEP-2

ACCESS RABBITMQ INTERFACE AND CREATE QUEUE WITH NAME: pool-queue


# STEP-3

INSTALL NESTJS-CLI

npm i -g @nestjs/cli


# STEP-4

RUN API REST - NESTJS PRODUCER

cd nestjs-producer

yarn start:dev

# STEP-5

RUN CONSUMER

cd nestjs-consumer

yarn start:dev