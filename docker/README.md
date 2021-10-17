## Build
```sh
docker build -t lu0alv/task-tracker-app:angular-frontend .
```

## Debug
```sh
config_file=${PARENT_DIR}/task-app.conf
docker run -it --name task-app \
    -p ${TASK_APP_PORT}:80 \
    --env-file ${config_file} \
    --entrypoint /bin/bash \
    lu0alv/task-tracker-app:angular-frontend -s
```

## Run
```sh
config_file=${PWD}/task-app.conf
docker run -d --name task-app \
    -p ${TASK_APP_PORT}:80 \
    --env-file ${config_file} \
    lu0alv/task-tracker-app:angular-frontend
```
