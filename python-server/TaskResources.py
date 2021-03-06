import json
from typing import List
from flask_restful import Resource

MOCKUP_DATA_FILE = "./mockup-data.json"

class GetTaskByAll(Resource):
    """
    Get all the mockup tasks.
    """
    def get(self):
        print("Getting tasks by all...")
        try:
            with open(MOCKUP_DATA_FILE, "r") as file:
                data = json.load(file)
            task_list = data["tasks"]
            print(task_list)
            return task_list, 200
        except Exception as exc:
            return f"{exc}", 500

class DeleteTaskById(Resource):
    """
    Delete a task from the list of task by providing its ID.
    """
    def delete(self, taskId):
        print(f"Deleting task with id: {taskId}")
        try:
            with open(MOCKUP_DATA_FILE, "r") as file:
                data: dict = json.load(file)

            tasks: List = data["tasks"]
            for task in tasks:
                if task["id"] == taskId:
                    tasks.remove(task)
                    break
                raise ValueError(f"Task with id {taskId} does not exist.")

            with open(MOCKUP_DATA_FILE, "w") as file:
                data = json.dump(data, file)
            
            return None
        except ValueError as err:
            return f"{err}", 404
        except Exception as exc:
            return f"{exc}", 500
        