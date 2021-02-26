ARG REGISTRY=registry.hub.docker.com
FROM ${REGISTRY}/anyfiddle/base

USER root

RUN add-apt-repository ppa:longsleep/golang-backports

RUN apt-get update && apt-get install -y \
	golang-go \
	&& rm -rf /var/lib/apt/lists/*

USER anyfiddle
ENV GOPATH=/home/anyfiddle/.go
RUN mkdir $GOPATH

USER anyfiddle