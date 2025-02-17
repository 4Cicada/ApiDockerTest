# Base image - menggunakan Node.js versi LTS
FROM node:14

# Set working directory di container
WORKDIR /usr/src/app

# Copy package.json dan package-lock.json
# Dipisah untuk memanfaatkan Docker cache
COPY package*.json ./

# Install dependensi
RUN npm install

# Copy seluruh source code aplikasi
COPY . .

# Expose port 3000 untuk akses dari luar container
EXPOSE 3000

# Command untuk menjalankan aplikasi
CMD ["node", "app.js"]