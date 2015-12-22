FROM ubuntu:14.04
MAINTAINER Jonathan Girard
RUN apt-get update && apt-get install -y \
	git \
	vim \
	ssh \
	curl \
	nano \
#	libpq-dev \
    apache2
#TODO add npm and node and gulp -g and in entry point do npm install
## install our code
RUN mkdir /docker
RUN mkdir /code
WORKDIR /docker
ADD . /docker/

ENTRYPOINT ["./docker-entrypoint.sh"]