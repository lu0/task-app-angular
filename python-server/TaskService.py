from flask import Flask
from flask_cors import CORS
from flask_restful import Api
from flask_swagger_ui import get_swaggerui_blueprint
from TaskResources import DeleteTaskById, GetTaskByAll

class TaskService:

    def __init__(self, base_url: str, static_folder: str, static_file_name: str):
        self._base_url = base_url
        self._app = self._create_app(base_url, folder=static_folder)
        self._app = self._create_swagger(self._app, base_url, static_file_name)
        self._api = Api(app=self._app)

        print("Initialized!")

    def add_resource(self, method, endpoint: str):
        self._api.add_resource(method, f"{self._base_url}/{endpoint}")

    @staticmethod
    def _create_app(base_url: str, folder: str) -> Flask:
        app = Flask(
            import_name=__name__,
            static_url_path=base_url,
            static_folder=folder
        )
        CORS(app)
        return app

    @staticmethod
    def _create_swagger(app: Flask, base_url: str, static_file_name: str) -> Flask:
        SWAGGER_BASE_URL = "/swagger"
        swagger_blueprint = get_swaggerui_blueprint(
            base_url=SWAGGER_BASE_URL,
            api_url=f"{base_url}/{static_file_name}"
        )
        app.register_blueprint(swagger_blueprint, url_prefix=SWAGGER_BASE_URL)
        return app

    def run(self):
        print("Running...")
        self._app.run(host="0.0.0.0", port="5554", debug=False)


if __name__ == "__main__":
    service = TaskService(
        base_url="/task-service/api/v1",
        static_folder="static",
        static_file_name="task-service.json"
    )
    service.add_resource(GetTaskByAll, "mockup/getTaskByAll")
    service.add_resource(DeleteTaskById, "mockup/deleteTaskById/<int:taskId>")
    service.run()
