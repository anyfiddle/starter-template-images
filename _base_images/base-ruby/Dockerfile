FROM anyfiddle/base

USER root

RUN apt-get update && apt-get install -y \
	ruby-full \
	&& rm -rf /var/lib/apt/lists/*

USER anyfiddle
