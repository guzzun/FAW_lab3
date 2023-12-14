import React from "react";
import TaskBlock from "../TaskBlock/index.jsx";
import TaskSkeleton from "./TaskSkeleton.jsx";
import taskApi from "../../api/tasks/index.js";

const TaskList = () => {
  const [taskList, setTaskList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [task] = React.useState(1);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await taskApi.getTaskList(task);
        setTaskList([...taskList, ...data]);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [task]);

  return (
    <>
      <div className="flex flex-row justify-center flex-wrap gap-3">
        {isLoading ? (
          [...new Array(4)].map((item, i) => <TaskSkeleton key={i} />)
        ) : taskList.filter((task) => task.isSaved).length > 0 ? (
          taskList
            .filter((task) => task.isSaved)
            .map((task) => (
              <TaskBlock
                key={task.id}
                task={task}
                onDelete={() => handleDelete(task.id)}
              />
            ))
        ) : (
            <div className="w-full bg-zinc-800 text-amber-400 font-semibold	p-5 m-5 text-lg" role="alert">
               <p> !Nu sunt task-uri salvate </p> 
            </div>
        )}
      </div>
    </>
  );
};

export default TaskList;
