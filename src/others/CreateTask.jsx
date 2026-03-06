import React, { useRef } from "react";

const CreateTask = ({ dispatch }) => {
  let TaskTitle = useRef("");
  let Date = useRef("");
  let AssignTo = useRef("");
  let Category = useRef("");
  let Description = useRef("");
  const submitHandler = (e) => {
    e.preventDefault();
    let Dt = Date.current.value;
    let Tt = TaskTitle.current.value;
    let At = AssignTo.current.value;
    let Cy = Category.current.value;
    let Des = Description.current.value;
    Date.current.value = "";
    TaskTitle.current.value = "";
    AssignTo.current.value = "";
    Category.current.value = "";
    Description.current.value = "";

    const data = JSON.parse(localStorage.getItem("employees"));
    console.log("1st", data);
    // const newData = data.map((elem) => {
    //   if (elem.firstName != At) {
    //     return elem;
    //   } else {
    //     elem.tasks.push({
    //       active: false,
    //       newTask: true,
    //       completed: false,
    //       failed: false,
    //       taskTitle: Tt,
    //       taskDescription: Des,
    //       taskDate: Dt,
    //       category: Cy,
    //     });
    //     return elem;
    //   }
    // });
    // console.log(newData);
    const employee = data.find((elem) => elem.firstName === At);

    if (employee) {
      employee.taskCounts.newTask += 1;
      employee.tasks.push({
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: Tt,
        taskDescription: Des,
        taskDate: Dt,
        category: Cy,
      });
    }
    dispatch({
      type: "emp",
      payload: data,
    });
    localStorage.setItem("employees", JSON.stringify(data));
  };

  return (
    <div className="p-7  mt-10 bg-[#1c1c1c] rounded">
      <form
        className="flex w-full flex-wrap items-start justify-between"
        onSubmit={submitHandler}
      >
        <div className="w-1/2">
          <div>
            <h3 className="mb-0.5 text-gray-500 text-sm"> Task title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5  rounded outline-none bg-transparent mb-4 border border-gray-400"
              type="text"
              placeholder="make a ui design"
              ref={TaskTitle}
            />
          </div>
          <div>
            <h3 className="mb-0.5 text-gray-500 text-sm">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5  rounded outline-none bg-transparent mb-4 border border-gray-400"
              type="date"
              ref={Date}
            />
          </div>
          <div>
            <h3 className="mb-0.5 text-gray-500 text-sm">Assign to</h3>
            <input
              className="text-sm py-1 px-2 w-4/5  rounded outline-none bg-transparent mb-4 border border-gray-400"
              type="text"
              placeholder="Employee name"
              ref={AssignTo}
            />
          </div>
          <div>
            <h3 className="mb-0.5 text-gray-500 text-sm">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5  rounded outline-none bg-transparent mb-4 border border-gray-400"
              type="text"
              placeholder="design,dev,etc"
              ref={Category}
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="mb-0.5 text-gray-500 text-sm">Description</h3>
          <textarea
            className="h-44 w-full text-sm py-2 px-4   rounded outline-none bg-transparent mb-4 border border-gray-400"
            name=""
            id=""
            ref={Description}
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-700 px-5 rounded text-sm mt-4 w-full">
            create task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
