# using a Node.js image
FROM node:16-alpine

# set up work directory
WORKDIR /app

# copy package.json and package-lock.json for downloading dependencies
COPY package*.json ./

# set up dependencies
RUN npm install

# set up Create React App globally
RUN npm install -g create-react-app

# create React-app
RUN npx create-react-app my-app

# move to  React-app
WORKDIR /app/my-app

# compiling the React application into static files
RUN npm run build

# open port for web-server
EXPOSE 4000