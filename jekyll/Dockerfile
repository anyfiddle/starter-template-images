FROM ghcr.io/anyfiddle/templates/base-ruby

USER root
RUN gem install bundler jekyll
USER anyfiddle

RUN  cd /home/anyfiddle && \
    rm -rf project && \
    jekyll new project
COPY --chown=anyfiddle ./workspace/anyfiddle.json /home/anyfiddle/project/anyfiddle.json