ARG REGISTRY=registry.hub.docker.com
FROM ${REGISTRY}/anyfiddle/base-rust

RUN cargo init

COPY --chown=anyfiddle ./workspace/anyfiddle.json /home/anyfiddle/project/anyfiddle.json