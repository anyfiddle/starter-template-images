FROM ghcr.io/anyfiddle/base-nodejs

USER root

RUN npm install -g serve

USER anyfiddle
COPY --chown=anyfiddle ./workspace /home/anyfiddle/project