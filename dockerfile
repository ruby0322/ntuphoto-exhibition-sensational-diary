FROM node:18

WORKDIR /sensational-diary

COPY public /sensational-diary/public
COPY src /sensational-diary/src
COPY package.json /sensational-diary/

RUN yarn

CMD ["yarn", "start"]
