"use client"
import { useState, useEffect } from "react"

export default function Home() {

  const [data, setData] = useState<any>([])
  const [btn, setBtn] = useState<number>(1)

  useEffect(() => {
    const fetchData = async (value:number) => {
      if(btn > 20) return setBtn(1)

      const response = await fetch(`https://fakestoreapi.com/products/${value}`)
      const responseData = await response.json()
      setData(responseData)
    }
    fetchData(btn)
  }, [btn])

  return (
    <div className="p-5">
      <div>
        <div>
          <span className="text-red-300 font-semibold text-xl">item: {data.title} - id {data.id}</span>
        </div>
        <button onClick={() => setBtn(btn+1)} className="p-3 bg-zinc-400 rounded-xl">Atulizar</button>
      </div>
    </div>
  )
}
