FROM node:15-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . . 
EXPOSE 5000

RUN npx prisma generate
CMD [ "npm", "run", "dev" ]