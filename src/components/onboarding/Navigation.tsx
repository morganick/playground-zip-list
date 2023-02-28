import React from "react";
import { ZipList, ZipListData } from "../../ZipList";
import { Step } from "../../types";

type Props = {
  listData: ZipListData<Step>;
}

function Navigation({listData} : Props) {
  const list = ZipList.toList(listData); 
  const currItem = ZipList.getCurr(listData);
  const gridColsStyle = { gridTemplateColumns: `repeat(${list.length}, 1fr)`};

  return(
      <ul className="my-5 mx-4 list-none grid gap-4" style={gridColsStyle}>
        {list.map((item, index) => {
          return (
            <li key={index} className={`relative group ${item.completed ? "completed" : ""} ${item === currItem ? "active" : ""}`}>
              <h2 className="px-3 py-4 text-sm text-center">{item.name}</h2>
              <div className="absolute bottom-full left-0 right-0 g">
                <div className="absolute left-1/2 top-1/2 -right-2/3 -mt-0.5 h-1 bg-gray-400 group-[:last-child]:hidden group-[.completed]:bg-sky-600"></div>
                <div className="absolute left-1/2 -ml-2 -mt-2 w-4 h-4 rounded-full bg-gray-400 group-[.completed]:bg-sky-600 group-[.active]:bg-white group-[.active]:outline-1 group-[.active]:outline-offset-2"></div>
              </div>
            </li>
          )
        })}
      </ul>
  )
}

export default Navigation;