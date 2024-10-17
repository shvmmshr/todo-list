FROM php:7.4-apache

# Update and upgrade system packages
RUN apt-get update && apt-get upgrade -y

# Install necessary PHP extensions
RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable mysqli

# Copy PHP application files to Apache root
COPY . /var/www/html

# Copy custom virtual host configuration to Apache
COPY ./my-site.conf /etc/apache2/sites-available/my-site.conf

# Configure environment variables in Apache
RUN echo 'SetEnv MYSQL_DB_CONNECTION ${MYSQL_DB_CONNECTION}' >> /etc/apache2/conf-enabled/environment.conf && \
    echo 'SetEnv MYSQL_DB_NAME ${MYSQL_DB_NAME}' >> /etc/apache2/conf-enabled/environment.conf && \
    echo 'SetEnv MYSQL_USER ${MYSQL_USER}' >> /etc/apache2/conf-enabled/environment.conf && \
    echo 'SetEnv MYSQL_PASSWORD ${MYSQL_PASSWORD}' >> /etc/apache2/conf-enabled/environment.conf && \
    echo 'SetEnv SITE_URL ${SITE_URL}' >> /etc/apache2/conf-enabled/environment.conf

# Apache configuration: enable necessary modules, set ServerName, and enable site
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf && \
    a2enmod rewrite headers && \
    a2dissite 000-default && \
    a2ensite my-site

# Expose HTTP and HTTPS ports
EXPOSE 80
EXPOSE 443

# Start Apache in the foreground
CMD ["apache2-foreground"]
