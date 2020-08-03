FROM anyfiddle/base-python3

ENV PATH="/home/anyfiddle/.local/bin:${PATH}"
COPY --chown=anyfiddle ./workspace /home/anyfiddle/project
RUN pip3 install django

RUN django-admin startproject mainsite . && python manage.py migrate