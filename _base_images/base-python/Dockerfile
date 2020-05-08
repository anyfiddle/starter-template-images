FROM anyfiddle/base

USER root

RUN apt-get update && apt-get install -y \
	python \
	python-pip \
	&& rm -rf /var/lib/apt/lists/*
USER anyfiddle
