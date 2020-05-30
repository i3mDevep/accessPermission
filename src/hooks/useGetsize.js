import { useEffect, useState } from 'react'

export const useGetsize = ( initialW,initialH ) => {
    const [width, setWidth] = useState(initialW)
    const [height, setHeight] = useState(initialH)

    const updateWidthAndHeight = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    };
    useEffect(() => {
      window.addEventListener("resize", updateWidthAndHeight)
      return () => window.removeEventListener("resize", updateWidthAndHeight)
    },[width,height])

    return [width,height]
}