# modified from https://www.tomray.dev/nestjs-docker-production
# build command: docker build -t nest-cloud-run .

FROM node:18-alpine As development

WORKDIR /usr/src/app

COPY --chown=node:node package.json ./
COPY --chown=node:node package-lock.json ./
COPY --chown=node:node prisma ./prisma/

RUN npm install

COPY --chown=node:node . .
USER node

FROM node:18-alpine As build

WORKDIR /usr/src/app
EXPOSE 3333

COPY --chown=node:node package.json ./
COPY --chown=node:node package-lock.json ./
COPY --chown=node:node prisma ./prisma/
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .

RUN npm run build
ENV NODE_ENV production
RUN npm install --only=production
USER node

FROM node:18-alpine As production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]