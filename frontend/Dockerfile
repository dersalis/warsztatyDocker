ARG version=3.6-alpine
FROM python:${version}

EXPOSE 80/tcp

ENV title="Hello world"
ENV FLASK_APP=/main.py

RUN pip install Flask==1.0.2
RUN pip install requests==2.18.4 

COPY main.py /
RUN sed -i 's/localhost:8080/backend/g' /main.py



ENTRYPOINT ["flask", "run"]
CMD ["-h", "0.0.0.0", "-p", "80"]
