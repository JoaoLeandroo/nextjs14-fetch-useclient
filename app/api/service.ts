const loadApiGoogleBooks = async (books: string, amount: number) => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${books}&maxResults=${amount}&ang=pt-br`)
    if (!response.ok) {
        
      return {message: "erro ao buscar requisição"}
      }
  
      return response.json()
}

export { loadApiGoogleBooks }