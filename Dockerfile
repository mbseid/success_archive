FROM node:14

WORKDIR /usr/src/app

RUN curl https://install.meteor.com/ | sh

COPY . .

RUN npm install --production

RUN meteor build . --directory --architecture os.linux.x86_64 --allow-superuser

RUN cd bundle/programs/server && npm install

CMD ["node", "bundle/main.js"]

