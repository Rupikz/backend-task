FROM node:12 AS builder

ENV POSTGRES_USER docker
ENV POSTGRES_PASSWORD docker
ENV POSTGRES_DB novotorica

WORKDIR /app

COPY package*.json ./

# Install app dependencies
RUN npm install

COPY . .

RUN npm run build

FROM node:12

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

ENV WAIT_VERSION 2.7.3
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]