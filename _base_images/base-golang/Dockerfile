FROM ghcr.io/anyfiddle/base

USER root

RUN add-apt-repository ppa:longsleep/golang-backports

RUN apt-get update && apt-get install -y \
	golang-go \
	&& rm -rf /var/lib/apt/lists/*

USER anyfiddle
ENV GOPATH=/home/anyfiddle/.go
RUN mkdir $GOPATH

USER anyfiddle