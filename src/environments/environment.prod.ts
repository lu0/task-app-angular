export function apiTask(endpoint: string) {
    return this._urlTask + endpoint;
}

export const environment = {
  production: true,
  _urlTask: "http://task-tracker.lucero.codes/task-service/api/v1",
  apiTask
};
