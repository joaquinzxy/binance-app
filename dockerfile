# Defina la imagen base
FROM alpine:3.14


# Instala Node.js y npm
RUN apk add --update nodejs npm

# Crea el directorio de la aplicación
WORKDIR /app

# Copia los archivos necesarios
COPY package.json ./package.json
COPY ./dist ./dist

# Instala las dependencias
RUN npm install --production

# Expone el puerto de la aplicación
EXPOSE 3000

# Inicia la aplicación
CMD [ "node", "dist/main.js" ]
