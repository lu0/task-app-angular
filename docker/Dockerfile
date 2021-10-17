FROM lu0alv/git-partial-clone:latest

ENV TZ=America/Monterrey
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt update
RUN apt install -y tzdata

RUN apt install -y nginx

# Install nodejs
RUN apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash
RUN apt install -y nodejs

ENV NG_CLI_ANALYTICS ci

WORKDIR /home/

ENTRYPOINT ["/bin/sh", "-c" , "get-source && exec /home/${PARENT_DIR}/${REPO_NAME}/${REMOTE_PARTIAL_DIR}/deploy.sh"]
