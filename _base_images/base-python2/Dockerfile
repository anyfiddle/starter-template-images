FROM registry.anyfiddle.com/anyfiddle/base

USER root

RUN apt-get update && apt-get install -y \
	python2 \
	&& rm -rf /var/lib/apt/lists/*

RUN curl https://bootstrap.pypa.io/2.6/get-pip.py | python2

RUN ln -s /usr/bin/python2 /usr/bin/python & \
	ln -s /usr/bin/pip2 /usr/bin/pip

USER anyfiddle
