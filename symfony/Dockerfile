FROM anyfiddle/base-php

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
	
RUN wget https://get.symfony.com/cli/installer -O - | bash /dev/stdin --install-dir=/usr/bin

USER anyfiddle

RUN symfony new ./ --full --no-git
COPY --chown=anyfiddle ./workspace /home/anyfiddle/project