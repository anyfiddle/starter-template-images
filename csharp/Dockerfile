ARG REGISTRY=registry.hub.docker.com
FROM ${REGISTRY}/anyfiddle/base-csharp

RUN dotnet new console -o .

COPY --chown=anyfiddle ./workspace/anyfiddle.json /home/anyfiddle/project/anyfiddle.json