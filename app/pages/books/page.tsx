"use client"
import { useEffect, useState } from "react";
import { loadApiGoogleBooks } from "@/app/api/service";


const Books = () => {

    const [data, setData] = useState<any>([])
    const [btn, setBtn] = useState<string>("Aventura")

    useEffect(() => {
        if(btn === "") return
        const loadApi = async (value: string) => {
            const data = await loadApiGoogleBooks(value, 10)
            const adventureBooks = data.items 
            setData(adventureBooks)
        }        
        loadApi(btn)
    }, [btn])

  return (
      <div className="w-full flex flex-col relative">
        <section className="mt-10">
          <div className="border-b border-zinc-400">
            <h1 className="text-2xl font-semibold drop-shadow text-white capitalize">
              Livros sobre {btn}
            </h1>
          </div>
              <input className="w-[350px] h-8 px-2 rounded-xl mt-2" type="text" placeholder="Nome do livro..." onChange={(e) => setBtn(e.target.value)} />

          <div className="flex flex-col gap-3">
          {data.map((todo:any) => (
            <div key={todo.id}>
                <span>{todo.volumeInfo.title}</span>
                <hr />
            </div>
          ))}
          </div> 

        </section>
      </div>
  );
};

export default Books;