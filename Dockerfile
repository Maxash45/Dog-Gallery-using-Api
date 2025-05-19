# Use an official Nginx image
FROM nginx:alpine

# Remove the default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy your static files to the Nginx server directory
COPY index.html /usr/share/nginx/html/
COPY index.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

