ARG REGISTRY=registry.hub.docker.com
FROM ${REGISTRY}/anyfiddle/base-nodejs

RUN npx create-react-app .
COPY --chown=anyfiddle ./workspace/anyfiddle.json /home/anyfiddle/project/anyfiddle.json