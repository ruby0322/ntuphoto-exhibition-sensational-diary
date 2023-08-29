FROM node:18

WORKDIR /sensational-diary

COPY public /sensational-diary/public
COPY src /sensational-diary/src
COPY package.json /sensational-diary/

RUN yarn

ENV PORT=3000
EXPOSE 3000

CMD ["yarn", "start"]
