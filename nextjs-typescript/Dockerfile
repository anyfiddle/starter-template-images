FROM ghcr.io/anyfiddle/templates/base-nodejs

RUN npx create-next-app . --typescript
COPY --chown=anyfiddle ./workspace/anyfiddle.json /home/anyfiddle/project/anyfiddle.json