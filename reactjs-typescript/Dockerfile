FROM ghcr.io/anyfiddle/templates/base-nodejs

RUN cd .. \
    && npm init vite@latest project --template react-ts \
    && cd project \
    && npm install
COPY --chown=anyfiddle ./workspace/anyfiddle.json /home/anyfiddle/project/anyfiddle.json
COPY --chown=anyfiddle ./workspace/vite.config.js /home/anyfiddle/project/vite.config.js