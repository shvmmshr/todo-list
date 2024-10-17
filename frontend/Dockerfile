# Use an official Node.js runtime as a parent image (alpine is lighter)
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json explicitly
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on
EXPOSE 5173

# Command to run your app
CMD ["npm", "run", "dev"]
