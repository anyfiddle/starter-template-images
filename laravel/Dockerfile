FROM registry.anyfiddle.com/anyfiddle/base-php

USER root
RUN apt-get update && apt-get install -y \
    openssl \
    php-bcmath \
    php-ctype \
    php-curl \
    php-fileinfo \
    php-json \
    php-mbstring \
    php-mysql \
    php-xml \
    && rm -rf /var/lib/apt/lists/*

USER anyfiddle

RUN composer create-project --prefer-dist laravel/laravel ./
COPY --chown=anyfiddle ./workspace/anyfiddle.json /home/anyfiddle/project/anyfiddle.json