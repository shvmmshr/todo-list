# Use the official PHP image with Apache
# Use the official PHP image with Apache
FROM php:8.1-apache

# Copy your Apache config
COPY ./000-default.conf /etc/apache2/sites-available/000-default.conf

# Copy your PHP files from the backend directory to the /var/www/html directory in the container
COPY . /var/www/html/

# Enable Apache Rewrite module if needed
RUN a2enmod rewrite

# Set the working directory
WORKDIR /var/www/html

# Enable the new configuration
RUN a2ensite 000-default.conf
# Set environment variables for database connection
ENV DB_HOST=mysql
ENV DB_NAME=todo_list_db
ENV DB_USER=root
ENV DB_PASSWORD=password
