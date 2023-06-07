import { WorkoutsContext } from "../context/WorkoutsContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside an WorkoutsContextProvider"
    );
  }

  return context;
};

/* 
This code imports the WorkoutsContext from the ../context/WorkoutsContext file and the useContext hook from the react library.
It then creates a custom hook, useWorkoutsContext, which returns the context from WorkoutsContext. 
If the context does not exist, it throws an error.
*/
