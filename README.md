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

# Installation Instructions

There are a few ways to install and run this. The recommended way is to use the docker image because it is the simplest and quickest.

## Docker Installation

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
