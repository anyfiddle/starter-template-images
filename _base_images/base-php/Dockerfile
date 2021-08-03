FROM ghcr.io/anyfiddle/templates/base

USER root

ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Etc/UTC

RUN apt-get update && apt-get install -y \
	php \
	&& rm -rf /var/lib/apt/lists/*

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
	php composer-setup.php --quiet --install-dir=/usr/bin --filename=composer && \
	rm composer-setup.php

USER anyfiddle
