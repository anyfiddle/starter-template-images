ARG REGISTRY=registry.hub.docker.com
FROM ${REGISTRY}/anyfiddle/base-php

COPY --chown=anyfiddle ./workspace /home/anyfiddle/project
RUN composer install