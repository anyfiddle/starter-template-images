FROM ghcr.io/anyfiddle/templates/base-nodejs

RUN cd /home/anyfiddle && rm -rf project && npx gatsby new project
COPY --chown=anyfiddle ./workspace/anyfiddle.json /home/anyfiddle/project/anyfiddle.json