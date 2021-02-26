FROM gcr.io/anyfiddle-cloud/base-python3

ENV PATH="/home/anyfiddle/.local/bin:${PATH}"
RUN pip3 install django

RUN django-admin startproject mainsite . && python manage.py migrate

COPY --chown=anyfiddle ./workspace/anyfiddle.json /home/anyfiddle/project/anyfiddle.json
COPY --chown=anyfiddle ./workspace/mainsite/settings.py /home/anyfiddle/project/mainsite/settings.py