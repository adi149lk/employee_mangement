import React from "react";
import AcceptTask from "./AcceptTask";
import { NewTask } from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="overflow-x-auto  mt-10  h-[55%] py-5 w-full bg-transparent flex items-center justify-start gap-5 flex-nowrap"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask data={elem} key={idx} />;
        }
        if (elem.completed) {
          return <CompleteTask data={elem} key={idx} />;
        }
        if (elem.failed) {
          return <FailedTask data={elem} key={idx} />;
        }
        if (elem.newTask) {
          return <NewTask data={elem} key={idx} />;
        }
      })}
    </div>
  );
};

export default TaskList;
