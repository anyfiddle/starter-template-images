FROM anyfiddle/base-nodejs

RUN cd /home/anyfiddle && rm -rf project && npx @vue/cli create --default project
COPY --chown=anyfiddle ./workspace/anyfiddle.json /home/anyfiddle/project/anyfiddle.json