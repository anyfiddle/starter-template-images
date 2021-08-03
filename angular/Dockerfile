FROM ghcr.io/anyfiddle/templates/base-nodejs

RUN sudo npm install -g @angular/cli
RUN cd /home/anyfiddle && rm -rf project && ng new project --defaults
COPY --chown=anyfiddle ./workspace/anyfiddle.json /home/anyfiddle/project/anyfiddle.json