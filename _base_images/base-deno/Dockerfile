FROM ghcr.io/anyfiddle/templates/base

USER anyfiddle
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
ENV DENO_INSTALL="/home/anyfiddle/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH"