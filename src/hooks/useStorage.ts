import {useEffect, useState} from "react";

const useStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialValue)
  useEffect(()=>{
    localStorage.setItem(key, value)
  }, [value])
  return [value, setValue]
}

export default useStorage
