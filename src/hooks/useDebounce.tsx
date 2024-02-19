import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay: number = 1000) => {

  const [debouncedValue, setDebouncedValue] = useState<string>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => clearTimeout(timer)
  }, [value])

  return debouncedValue
}

export default useDebounce