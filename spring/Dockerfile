ARG REGISTRY=registry.hub.docker.com
FROM ${REGISTRY}/anyfiddle/base-java

COPY --chown=anyfiddle ./workspace /home/anyfiddle/project
RUN ./mvnw install
