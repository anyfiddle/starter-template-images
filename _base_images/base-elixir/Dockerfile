ARG REGISTRY=registry.hub.docker.com
FROM ${REGISTRY}/anyfiddle/base

ARG DEBIAN_FRONTEND=noninteractive

USER root
RUN wget https://packages.erlang-solutions.com/erlang-solutions_2.0_all.deb && \
	dpkg -i erlang-solutions_2.0_all.deb && \
	rm erlang-solutions_2.0_all.deb

RUN apt-get update && apt-get install -y \
	elixir \
	esl-erlang \
	&& rm -rf /var/lib/apt/lists/*

USER anyfiddle