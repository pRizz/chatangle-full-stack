FROM ubuntu:17.10
FROM node:10

# Create app directory
WORKDIR /usr/src/app

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update &&\
    apt-get upgrade -y &&\
    apt-get install -y debconf-utils apt-utils dialog software-properties-common python-software-properties &&\
    apt-get update &&\
    echo "deb http://ppa.launchpad.net/linuxuprising/java/ubuntu artful main" | tee /etc/apt/sources.list.d/linuxuprising-java.list &&\
    apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 73C3DB2A &&\
    apt-get update &&\
    echo oracle-java10-installer shared/accepted-oracle-license-v1-1 boolean true | /usr/bin/debconf-set-selections &&\
    apt-get install -y oracle-java10-installer oracle-java10-set-default

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --only=production
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 14265 14600 15600 16600 8085
EXPOSE 14600/udp
CMD [ "npm", "start" ]