FROM php:8.2-fpm

# Install dependencies
RUN apt-get update && \
    apt-get install -y \
        git \
        zip \
        unzip \
        libpng-dev \
        libjpeg-dev \
        libfreetype6-dev \
        libonig-dev \
        libzip-dev \
        && docker-php-ext-configure gd --with-freetype --with-jpeg \
        && docker-php-ext-install -j$(nproc) gd pdo pdo_mysql zip

# Set working directory
WORKDIR /var/www/html

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy application files
COPY . .
ENV COMPOSER_ALLOW_SUPERUSER 1
RUN rm -f composer.lock
RUN rm -rf vendor/
# RUN composer update
# Install dependencies
RUN composer install

# Expose port
EXPOSE 9000

CMD ["php", "artisan", "serve", "--host", "0.0.0.0"]
