# Use the official Node.js image
FROM node:20.11.1

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy the rest of the application
COPY . .

# Install dependencies
RUN npm install

# Expose port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
