FROM node:18
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "run", "gatsby"]
