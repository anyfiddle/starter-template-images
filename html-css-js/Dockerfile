ARG REGISTRY=registry.hub.docker.com
FROM ${REGISTRY}/anyfiddle/base-nodejs

USER root

RUN npm install -g serve

USER anyfiddle
COPY --chown=anyfiddle ./workspace /home/anyfiddle/project