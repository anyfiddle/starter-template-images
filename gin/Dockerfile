ARG REGISTRY=registry.hub.docker.com
FROM ${REGISTRY}/anyfiddle/base-golang

RUN go get -u github.com/gin-gonic/gin
COPY --chown=anyfiddle ./workspace /home/anyfiddle/project
