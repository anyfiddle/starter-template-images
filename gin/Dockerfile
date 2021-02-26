FROM gcr.io/anyfiddle-cloud/templates/base-golang

RUN go get -u github.com/gin-gonic/gin
COPY --chown=anyfiddle ./workspace /home/anyfiddle/project
