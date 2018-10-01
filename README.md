# chatangle-full-stack
A package that easily deploys Chatangle, full stack, with npm.

# Prerequisites

Ensure that these ports are open for these purposes:

| Protocol |  Port |          Reason         |
|:--------:|:-----:|:-----------------------:|
|    TCP   | 14265 |       IRI Node API      |
|    TCP   | 14600 |   IRI Node Neighboring  |
|    UDP   | 14600 |   IRI Node Neighboring  |
|    TCP   | 15600 | Nelson Node Neighboring |
|    TCP   | 16600 |     Nelson Node API     |
|    TCP   |  8085 |   Chatangle Front End   |
|    TCP   |  8008 |   Chatangle Back End   |

# Installation Instructions

There are a few ways to install and run this. The recommended way is to use the docker image because it is the simplest and quickest.

## Docker Installation

First, have docker installed. Then run:

```bash
sudo docker run -d -p 14265:14265 -p 14600:14600 -p 14600:14600/udp -p 15600:15600 -p 16600:16600 -p 8085:8085 -p 8008:8008 prizz/chatangle-full-stack
```

## NPM Installation

### NPM Installation From NPM

Install globally with

```bash
npm i -g chatangle-full-stack
```

### NPM Installation From GitHub

Install globally with

```bash
npm i -g pRizz/chatangle-full-stack
```

## Running
When installed globally, run with

```bash
chatangle-full-stack
```

To run this in the background:

```bash
nohup chatangle-full-stack &
```
