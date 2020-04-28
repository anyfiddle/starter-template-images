FROM anyfiddle/ubuntu

USER root

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -

RUN apt-get install -y \
	nodejs \
	yarn \
	&& rm -rf /var/lib/apt/lists/*

USER anyfiddle
COPY --chown=anyfiddle ./workspace /home/anyfiddle/project
WORKDIR /home/anyfiddle/project
RUN npm install