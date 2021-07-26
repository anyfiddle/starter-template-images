ARG REGISTRY=registry.hub.docker.com
FROM ${REGISTRY}/anyfiddle/base

ARG DEBIAN_FRONTEND=noninteractive

USER root

RUN apt-get update && apt-get install -y \
	elixir \
	erlang \
	&& rm -rf /var/lib/apt/lists/*

USER anyfiddle