FROM node:lts-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
CMD ["npm", "run", "dev"]
# RUN npm run build
# CMD ["npm", "run", "preview"]
