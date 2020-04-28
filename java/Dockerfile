FROM anyfiddle/ubuntu

USER root

RUN apt-get update && apt-get install -y \
	default-jdk \
	&& rm -rf /var/lib/apt/lists/*

USER anyfiddle
COPY --chown=anyfiddle ./workspace /home/anyfiddle/project