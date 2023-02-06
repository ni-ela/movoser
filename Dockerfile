# pull base image
FROM node:14.13.1-buster-slim

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
#ARG NODE_ENV=production
#ENV NODE_ENV $NODE_ENV

# default to port 19006 for node, and 19001 and 19002 (tests) for debug
ARG PORT=19006
ENV PORT $PORT
#EXPOSE $PORT 19001 19002

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm --allow-root -g npm@latest expo-cli@latest

# install dependencies first, in a different location for easier app bind mounting for local development
# due to default /opt permissions we have to create the dir with root and change perms
RUN mkdir /opt/movoser && chown node:node /opt/movoser
WORKDIR /opt/movoser
ENV PATH /opt/movoser/.bin:$PATH

COPY --chown=node:node ./frontend/package.json ./
COPY --chown=node:node ./frontend/package-lock.json ./
USER node

#COPY ./movoser/package.json ./movoser/package-lock.json ./
RUN npm install

# copy in our source code last, as it changes the most
WORKDIR /opt/movoser/app
# for development, we bind mount volumes; comment out for production
#COPY ./movoser .

ENTRYPOINT ["npm", "run"]
CMD ["web"]