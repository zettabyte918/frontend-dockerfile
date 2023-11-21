# Use the official Node.js image as the base image
FROM node

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code to the working directory
COPY . .

# Build the Angular application
RUN npm run build --prod

# Expose the port that the application will run on
EXPOSE 4200

# Start the application
CMD ["npm", "start"]
