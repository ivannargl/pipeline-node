FROM node:18-slim

WORKDIR /usr/src/app

# Copiar dependencias primero para aprovechar el caché de Docker
COPY package*.json ./

RUN npm install --only=production

# Copiar solo lo necesario
COPY . .

# Usar el usuario de bajos privilegios que ya trae la imagen
USER node

EXPOSE 3000

CMD [ "npm", "start" ]