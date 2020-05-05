FROM anyfiddle/ubuntu

USER root

ENV GOVERSION 1.6.2

ENV GOROOT /opt/go

RUN cd /opt && wget https://storage.googleapis.com/golang/go${GOVERSION}.linux-amd64.tar.gz && \
    tar zxf go${GOVERSION}.linux-amd64.tar.gz && rm go${GOVERSION}.linux-amd64.tar.gz && \
    ln -s /opt/go/bin/go /usr/bin/

USER anyfiddle
ENV GOPATH=/home/anyfiddle/.go
RUN mkdir $GOPATH

COPY --chown=anyfiddle ./workspace /home/anyfiddle/project