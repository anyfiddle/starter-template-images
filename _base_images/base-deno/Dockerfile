ARG REGISTRY=registry.hub.docker.com
FROM ${REGISTRY}/anyfiddle/base

USER anyfiddle
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
ENV DENO_INSTALL="/home/anyfiddle/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH"