FROM ghcr.io/anyfiddle/base-nodejs

RUN cd /home/anyfiddle && rm -rf project && npx @vue/cli create --default project
COPY --chown=anyfiddle ./workspace/anyfiddle.json /home/anyfiddle/project/anyfiddle.json
COPY --chown=anyfiddle ./workspace/vue.config.js /home/anyfiddle/project/vue.config.js