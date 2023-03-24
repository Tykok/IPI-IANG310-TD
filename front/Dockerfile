FROM node:16 as base
WORKDIR /app
COPY . .

# To run the app
FROM base as run

RUN yarn global add @angular/cli
RUN yarn
EXPOSE 4200
CMD yarn run start
