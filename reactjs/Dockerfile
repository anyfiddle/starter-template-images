FROM anyfiddle/nodejs

RUN rm index.js anyfiddle.json
RUN npx create-react-app .
COPY --chown=anyfiddle ./workspace/anyfiddle.json /home/anyfiddle/project/anyfiddle.json