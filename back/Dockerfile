FROM node:16 as base
WORKDIR /app
COPY . .

# To run the app
FROM base as run

RUN yarn
EXPOSE 3000
CMD yarn dev


# To run test
FROM base as test

RUN yarn
EXPOSE 3000
CMD yarn test
