ARG version=3.6-alpine
FROM python:${version}

ENV FLASK_APP=/main.py

RUN pip install Flask==1.0.2

COPY main.py /


EXPOSE 80/tcp

ENTRYPOINT ["flask", "run"]
CMD ["-h", "0.0.0.0", "-p", "80"]
