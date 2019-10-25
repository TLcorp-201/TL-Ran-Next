#!/bin/bash

[ ! -z $(docker ps | grep ai-new-front-ins-jenkins | sed 's/\s+/ /g' | cut -d ' ' -f 1) ] && docker ps | grep ai-new-front-ins-jenkins | sed 's/\\s+/ /g' | cut -d ' ' -f 1 | xargs -I {} docker container stop {} || true

[ ! -z $(docker ps --all | grep ai-new-front-ins-jenkins | sed 's/\s+/ /g' | cut -d ' ' -f 1) ] && docker ps --all | grep ai-new-front-ins-jenkins | sed 's/\s+/ /g' | cut -d ' ' -f 1 | xargs -I {} docker container rm {} || true

[ ! -z "$(docker image ls | grep tuancaurao1993/ai-news-front | awk '{print $3}')" ] && docker image ls | grep tuancaurao1993/ai-news-front | awk '{print $3}' | xargs -I {} docker rmi {} || true
