const api = "https://jsonplaceholder.typicode.com/todos/"

async function postQlish() {
  const response = await fetch(api, {
    method: "POST",
    body: JSON.stringify({
      userId: 1,
      title: "Salamalekum",
      completed: false
    }),
    headers: {
      "Content-type": "application/json;"
    }
})

  const data = await response.json()
  console.log(data)
}

postQlish()
