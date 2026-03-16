FROM node:18

WORKDIR /usr/src/app

# Copiamos los archivos de configuración
COPY package*.json ./

# Instalamos sin ejecutar scripts de ciclo de vida (evita el error del prepare)
RUN npm install --ignore-scripts

# Copiamos el resto del código
COPY . .

# Ajustamos permisos para el usuario node
RUN chown -R node:node /usr/src/app
USER node

EXPOSE 3000

CMD [ "npm", "start" ]