# Usar una imagen base de Node
FROM node:18-slim

# Crear directorio de trabajo y dar permisos al usuario node
WORKDIR /usr/src/app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# CAMBIO CLAVE: Usar el usuario no-privilegiado 'node'
USER node

# Exponer el puerto
EXPOSE 3000

# Comando para iniciar
CMD [ "npm", "start" ]