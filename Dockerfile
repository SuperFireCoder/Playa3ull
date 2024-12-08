# Step 1: Use the official Node.js image as a base image
FROM node:18-slim

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json into the container
COPY package.json package-lock.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of your application code into the container
COPY . .

# Step 6: Build the Fastify application
RUN npm run build

# Step 7: Expose the port that Fastify will listen on
EXPOSE 3000

# Step 8: Run the Fastify application
CMD ["npm", "run", "start"]
