import React, { useReducer, useRef } from "react";
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
  console.log(...arguments);
  switch (action.type) {
    case ACTIONS.NEXT:
      return { ...state, listData: ZipList.next(state.listData)};
    case ACTIONS.PREV:
      return { ...state, listData: ZipList.prev(state.listData)};
    default:
      return state;
  }
}

function OnBoarding({steps} : Props) {
  const [state, dispatch] = useReducer(reducer, { listData: ZipList.create<Step>(steps) })
  let currStep = useRef(ZipList.getCurr(state.listData));

  function nextStep() {
    console.log("clicked");
    dispatch({ type: ACTIONS.NEXT });
  }

  function prevStep() {
    dispatch({ type: ACTIONS.PREV });
  }

  return (
    <div className="max-w-3xl mt-20">
      <h2 className="font-bold text-center mb-10">Get started with Publishing</h2>
      <Navigation listData={state.listData} />
      <div className="text-gray-800 bg-white rounded-md">
        <div className="py-10 px-20">
          <p className="text-center">{currStep.current?.description}</p>
        </div>
        <div className="flex justify-between px-5 py-4 border-t border-gray-200">
          <button className="rounded border border-gray-400 bg-gray-400 text-white px-4 py-1 text-shadow text-sm" onClick={prevStep}>Previous</button>
          <button className="rounded border border-sky-600 bg-sky-600 text-white px-4 py-1 text-sm text-shadow" onClick={nextStep}>{currStep.current?.buttonText || "Next"}</button>

        </div>
      </div>
    </div>
  )
}

export default OnBoarding;