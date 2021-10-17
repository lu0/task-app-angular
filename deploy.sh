#!/bin/bash

#
# Deployment script  / entrypoint
# Intended to be used along the git-partial-clone image
#

GIT_DIR=/home/${PARENT_DIR}/${REPO_NAME}/${REMOTE_PARTIAL_DIR}
[ -d ${GIT_DIR} ] && cd $GIT_DIR || exit 1

# Update the source code
git checkout . && git fetch && git pull

if [[ -d ./node_modules ]] && [[ $(git rev-parse HEAD) == $(git rev-parse @{u}) ]];
then
    echo "Already up to date."
else
    # Build
    npm run build:prod || rm -rf ./node_modules

    # Link to the default site
    rm -rf /var/www/html && \
    ln -srf ./dist/task-tracker /var/www/html
fi

# Start the server
if [[ ! -f /var/www/html/index.html ]];
then
    echo "No index.html found, aborting."
    rm -rf ./node_modules
    exit 1
fi

echo "Starting the NGINX server..."
nginx -t && \
exec nginx -g "daemon off;"
