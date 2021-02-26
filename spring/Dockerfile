FROM gcr.io/anyfiddle-cloud/base-java

COPY --chown=anyfiddle ./workspace /home/anyfiddle/project
RUN ./mvnw install
