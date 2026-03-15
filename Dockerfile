# Usar una imagen base de Node
FROM node:18

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto que usa tu app (según tu manual es el 3000)
EXPOSE 3000

# Comando para iniciar la app
CMD [ "npm", "start" ]