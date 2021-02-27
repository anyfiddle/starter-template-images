ARG REGISTRY=registry.hub.docker.com
FROM ${REGISTRY}/anyfiddle/base-python3

COPY --chown=anyfiddle ./workspace /home/anyfiddle/project
RUN pip3 install Flask
