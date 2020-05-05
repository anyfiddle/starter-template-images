FROM ubuntu:18.04

RUN apt-get update && apt-get install -y \
	curl \
	dumb-init \
	git \
	htop \
	less \
	locales \
	nano \
	net-tools \
	openssl \
	sudo \
	tmux \
	vim \
	wget \
	&& rm -rf /var/lib/apt/lists/*

RUN locale-gen en_US.UTF-8
# We cannot use update-locale because docker will not use the env variables
# configured in /etc/default/locale so we need to set it manually.
ENV LC_ALL=en_US.UTF-8 \
	SHELL=/bin/bash

RUN adduser --gecos '' --disabled-password anyfiddle && \
	echo "anyfiddle ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers.d/nopasswd

RUN curl -SsL https://github.com/boxboat/fixuid/releases/download/v0.4/fixuid-0.4-linux-amd64.tar.gz | tar -C /usr/local/bin -xzf - && \
  chown root:root /usr/local/bin/fixuid && \
  chmod 4755 /usr/local/bin/fixuid && \
  mkdir -p /etc/fixuid && \
  printf "user: anyfiddle\ngroup: anyfiddle\n" > /etc/fixuid/config.yml

COPY ./tmux.conf /etc/tmux.conf

USER anyfiddle

COPY ./.bashrc /home/anyfiddle/.bashrc


# Create first so these directories will be owned by anyfiddle instead of root
# (workdir and mounting appear to both default to root).
RUN mkdir -p /home/anyfiddle/project
WORKDIR /home/anyfiddle/project
ENV WORKSPACE_DIR=/home/anyfiddle/project

ENTRYPOINT ["dumb-init", "fixuid", "-q"]
CMD ["bash"]
