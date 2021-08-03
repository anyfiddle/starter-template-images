FROM ghcr.io/anyfiddle/templates/base

USER root

RUN apt-get update && apt-get install -y \
	golang-go \
	&& rm -rf /var/lib/apt/lists/*

USER anyfiddle
ENV GOPATH=/home/anyfiddle/.go
RUN mkdir $GOPATH

USER anyfiddle