FROM anyfiddle/base-php

USER root
RUN apt-get update && apt-get install -y \
    php-mbstring \
    php-mysql \
    php-xml \
	&& rm -rf /var/lib/apt/lists/*

USER anyfiddle

RUN composer create-project --prefer-dist laravel/lumen ./
COPY --chown=anyfiddle ./workspace/anyfiddle.json /home/anyfiddle/project/anyfiddle.json