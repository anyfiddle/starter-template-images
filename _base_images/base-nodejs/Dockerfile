FROM anyfiddle/base

USER root

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -

RUN apt-get update && apt-get install -y \
	nodejs \
	yarn \
	&& rm -rf /var/lib/apt/lists/*

USER anyfiddle
