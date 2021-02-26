ARG REGISTRY=registry.hub.docker.com
FROM ${REGISTRY}/anyfiddle/base-nodejs

RUN sudo npm install -g @angular/cli
RUN cd /home/anyfiddle && rm -rf project && ng new project --defaults
COPY --chown=anyfiddle ./workspace/anyfiddle.json /home/anyfiddle/project/anyfiddle.json