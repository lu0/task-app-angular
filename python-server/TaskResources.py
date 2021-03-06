import json
from typing import List
from flask import request
from flask_restful import Resource

MOCKUP_DATA_FILE = "./mockup-data.json"

def load_json_file():
    with open(MOCKUP_DATA_FILE, "r") as file:
        data: dict = json.load(file)
    return data

def dump_to_json_file(data):
    with open(MOCKUP_DATA_FILE, "w") as file:
        data = json.dump(data, file, indent=4)
    return data

class GetTaskByAll(Resource):
    """
    Get all the mockup tasks.
    """
    def get(self):
        print("Getting tasks by all...")
        try:
            data = load_json_file();
            print(data)
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
            data = load_json_file();
            tasks: List = data["tasks"]
            found = False
            for task in tasks:
                if task["id"] == taskId:
                    tasks.remove(task)
                    found = True
                    break
            if not found:
                raise ValueError(f"Task with id {taskId} does not exist.")

            data = dump_to_json_file(data)
            return "deleted"
        except ValueError as err:
            return f"{err}", 404
        except Exception as exc:
            return f"{exc}", 500


class UpdateTask(Resource):
    """
    Update properties of a task
    """
    def put(self):
        try:
            req_body_bytes = request.data
            req_body_string = req_body_bytes.decode()
            new_task: dict = json.loads(req_body_string)
            print(f"Task to be updated: {new_task}")

            data = load_json_file();
            index = 0
            found = False
            tasks: List = data["tasks"]
            for task in tasks:
                if task["id"] == new_task["id"]:
                    # Remove and reinsert
                    tasks.remove(task)
                    tasks.insert(index, new_task)
                    found = True
                    break
                index += 1
            if not found:
                raise ValueError(f"Task with id {new_task['id']} does not exist.")

            data = dump_to_json_file(data)
            tasks_list = GetTaskByAll().get()[0]
            return tasks_list[index], 200
        except ValueError as err:
            return f"{err}", 404
        except Exception as exc:
            return f"{exc}", 500


class AddTask(Resource):
    def post(self):
        try:
            req_body_str = request.data.decode()
            new_task: dict = json.loads(req_body_str)

            data = load_json_file();
            tasks: List = data["tasks"]
            ids = []
            for task in tasks:
                ids.append(task["id"])
            next_id = max(ids) + 1

            new_task["id"] = next_id
            tasks.append(new_task)
            data["tasks"] = tasks

            data = dump_to_json_file(data)
            return new_task, 200
        except ValueError as err:
            return f"{err}", 404
        except Exception as exc:
            return f"{exc}", 500