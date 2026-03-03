import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="overflow-x-auto  mt-10  h-[55%] py-5 w-full bg-transparent flex items-center justify-start gap-5 flex-nowrap"
    >
      <div className="h-full w-75 bg-emerald-500 rounded-xl shrink-0 p-5">
        <div className="flex items-center justify-between">
          <h3 className="bg-amber-700 px-3 py-1 rounded-sm text-sm">High</h3>
          <h4 className="text-sm">20 mar 2002</h4>
        </div>
        <h2 className="taxt-2xl mt-5 font-semibold">Make a project</h2>
        <p className="mt-3 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus delectus id aperiam asperiores doloremque.
        </p>
      </div>
      <div className="h-full w-75 bg-red-500 rounded-xl shrink-0 p-5">
        <div className="flex items-center justify-between">
          <h3 className="bg-amber-700 px-3 py-1 rounded-sm text-sm">High</h3>
          <h4 className="text-sm">20 mar 2002</h4>
        </div>
        <h2 className="taxt-2xl mt-5 font-semibold">Make a project</h2>
        <p className="mt-3 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus delectus id aperiam asperiores doloremque.
        </p>
      </div>
      <div className="h-full w-75 bg-yellow-500 rounded-xl shrink-0 p-5">
        <div className="flex items-center justify-between">
          <h3 className="bg-amber-700 px-3 py-1 rounded-sm text-sm">High</h3>
          <h4 className="text-sm">20 mar 2002</h4>
        </div>
        <h2 className="taxt-2xl mt-5 font-semibold">Make a project</h2>
        <p className="mt-3 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus delectus id aperiam asperiores doloremque.
        </p>
      </div>
      <div className="h-full w-75 bg-blue-500 rounded-xl shrink-0 p-5">
        <div className="flex items-center justify-between">
          <h3 className="bg-amber-700 px-3 py-1 rounded-sm text-sm">High</h3>
          <h4 className="text-sm">20 mar 2002</h4>
        </div>
        <h2 className="taxt-2xl mt-5 font-semibold">Make a project</h2>
        <p className="mt-3 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus delectus id aperiam asperiores doloremque.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
