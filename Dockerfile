FROM node
ENV NPM_CONFIG_LOGLEVEL info
ENV NODE_ENV production
COPY . /app
WORKDIR /app
RUN npm install
ENTRYPOINT ["npm", "start"]

# docker build -t graphql-container .
# 
# For Development Container
# sudo docker run -dt --network host --name=graphql-container -v $PWD:/app graphql-container
# 
# For Production Container
# sudo docker run -dt --restart=always --network host --name=graphql-container -v $PWD:/app graphql-container
# 
# Remove the container
# docker rm -f graphql-container

# docker logs --follow graphql-container
# docker exec -it graphql-container bash
