import json
from flask_restful import Api, Resource
class GetTaskByAll(Resource):
    def get(self):
        try:
            # Get tasks
            print("Getting tasks by all...")
            with open("./mockup-data.json") as file:
                data = json.load(file)
            task_list = data["tasks"]
            print(task_list)
            return task_list, 200
        except Exception as exc:
            return f"{exc}", 500