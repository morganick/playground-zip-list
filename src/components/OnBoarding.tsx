import React, { useReducer, useRef, useState } from "react";
import { ZipList, ZipListData } from '../ZipList';
import { Step } from '../types';
import Navigation from "./onboarding/Navigation";

type Props = {
  steps: Step[];
}

type State = {
  listData: ZipListData<Step>
}

type Action = {
  type: string;
  payload?: object;
}

const ACTIONS = {
  NEXT: 'next',
  PREV: 'prev'
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case ACTIONS.NEXT:
      let completedListData = {
        ...state.listData,
        currItem: {
          ...state.listData.currItem,
          completed: true
        }
      }
      return { ...state, listData: ZipList.next(completedListData)};
    case ACTIONS.PREV:
      let incompletedListData = {
        ...state.listData,
        currItem: {
          ...state.listData.currItem,
          completed: false
        }
      }
      return { ...state, listData: ZipList.prev(incompletedListData)};
    default:
      return state;
  }
}

function OnBoarding({steps} : Props) {
  const [state, dispatch] = useReducer(reducer, { listData: ZipList.create<Step>(steps) })
  const currStep = ZipList.getCurr(state.listData);

  function nextStep() {
    dispatch({ type: ACTIONS.NEXT });
  }

  function prevStep() {
    dispatch({ type: ACTIONS.PREV });
  }

  return (
    <div className="max-w-3xl w-full mt-20">
      <h2 className="font-bold text-center mb-10">Get started with Publishing</h2>
      <Navigation listData={state.listData} />
      <div className="text-gray-800 bg-white rounded-md">
        <div className="py-10 px-20 min-h-[400px]">
          { currStep?.imageUrl && <img className="my-10 mx-auto w-2/3" src={currStep.imageUrl} /> }
          <p className="text-center text-sm">{currStep?.description}</p>
        </div>
        <div className="flex justify-between px-5 py-4 border-t border-gray-200">
          <button className={`rounded border border-gray-400 bg-gray-400 text-white px-4 py-1 text-shadow text-sm min-w-[120px] ${!ZipList.getPrev(state.listData) && "invisible" }`} onClick={prevStep}>Previous</button>
          <button className={`rounded border border-sky-600 bg-sky-600 text-white px-4 py-1 text-sm text-shadow min-w-[120px]`} onClick={nextStep}>{currStep?.buttonText || "Next"}</button>

        </div>
      </div>
    </div>
  )
}

export default OnBoarding;