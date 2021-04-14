ARG REGISTRY=registry.hub.docker.com
FROM ${REGISTRY}/anyfiddle/base-php

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
    php-sqlite3 \
    php-xml \
    && rm -rf /var/lib/apt/lists/*

RUN wget https://get.symfony.com/cli/installer -O - | bash /dev/stdin --install-dir=/usr/bin

USER anyfiddle

RUN symfony new ./ --full --no-git \
    && sed -i "/^DATABASE_URL/s/^/# /g" .env \ 
    && sed -i "/^# DATABASE_URL=\"sqlite/s//DATABASE_URL=\"sqlite/g" .env

COPY --chown=anyfiddle ./workspace /home/anyfiddle/project