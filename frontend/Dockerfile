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

# set up a simple web server to serve static files
RUN npm install -g serve

# set the command to start the web server when the container starts
CMD ["serve", "-s", "build", "-l", "4000"]

# open port for web-server
EXPOSE 4000