FROM ghcr.io/anyfiddle/templates/base-java

COPY --chown=anyfiddle ./workspace /home/anyfiddle/project
RUN ./mvnw install
