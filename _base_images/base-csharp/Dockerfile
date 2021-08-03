FROM ghcr.io/anyfiddle/templates/base

USER root

RUN wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb && \
    dpkg -i packages-microsoft-prod.deb && \
    rm packages-microsoft-prod.deb

RUN apt-get update && apt-get install -y \
    apt-transport-https \
    dotnet-sdk-5.0 \
    && rm -rf /var/lib/apt/lists/*

USER anyfiddle