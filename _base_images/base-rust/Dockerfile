FROM gcr.io/anyfiddle-cloud/templates/base

RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --no-modify-path
ENV PATH="/home/anyfiddle/.cargo/bin:${PATH}"
ENV USER=anyfiddle

