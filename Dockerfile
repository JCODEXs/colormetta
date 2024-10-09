# Stage 1: Install dependencies
FROM node:20-alpine AS deps

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Stage 2: Build the app
FROM node:20-alpine AS builder

# Create app directory
WORKDIR /usr/src/app

# Copy the dependencies from the deps stage
COPY --from=deps /usr/src/app/node_modules ./node_modules

# Copy all source files
COPY . .

# Build the application
RUN npm run build

# Stage 3: Run the app
FROM node:20-alpine AS runner

# Set the working directory
WORKDIR /usr/src/app

# Copy the built app and the node_modules from the builder stage
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next/static ./.next/static
COPY --from=builder /usr/src/app/.next/standalone ./

# Expose ports
EXPOSE 3000

# Set environment variables
ENV PORT 3000
ENV HOST=0.0.0.0

# Run the app
CMD ["node", "server.js"]
