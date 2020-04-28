FROM anyfiddle/ubuntu

USER root

RUN apt-get update && apt-get install -y \
	python \
	python-pip \
	&& rm -rf /var/lib/apt/lists/*

USER anyfiddle

COPY --chown=anyfiddle ./workspace /home/anyfiddle/project