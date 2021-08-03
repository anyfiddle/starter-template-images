FROM ghcr.io/anyfiddle/templates/base-nodejs

RUN cd /home/anyfiddle && rm -rf project && npx @docusaurus/init@latest init project classic
COPY --chown=anyfiddle ./workspace/anyfiddle.json /home/anyfiddle/project/anyfiddle.json