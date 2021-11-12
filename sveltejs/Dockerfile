FROM ghcr.io/anyfiddle/templates/base-nodejs

RUN cd .. \
    && npm init vite@latest project --template svelte \
    && cd project \
    && npm install
COPY --chown=anyfiddle ./workspace/anyfiddle.json /home/anyfiddle/project/anyfiddle.json