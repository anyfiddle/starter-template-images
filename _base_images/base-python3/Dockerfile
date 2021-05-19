ARG REGISTRY=registry.hub.docker.com
FROM ${REGISTRY}/anyfiddle/base

USER root

RUN apt-get update && apt-get install -y \
	python3 \
	python3-pip \
	&& rm -rf /var/lib/apt/lists/*

RUN ln -s /usr/bin/python3 /usr/bin/python

USER anyfiddle