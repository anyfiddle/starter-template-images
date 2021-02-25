FROM ghcr.io/anyfiddle/base-ruby

USER root

ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Etc/UTC

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && apt-get install -y \
    build-essential \
    libsqlite3-dev \
    nodejs \
    sqlite3 \
    tzdata \
    yarn \
    zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*

RUN gem install rails
USER anyfiddle

RUN rails new .

COPY --chown=anyfiddle ./workspace/anyfiddle.json /home/anyfiddle/project/anyfiddle.json
COPY --chown=anyfiddle ./workspace/config/environments/development.rb /home/anyfiddle/project/config/environments/development.rb