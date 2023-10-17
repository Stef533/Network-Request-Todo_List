async function asyncFetch(){
  try{
    const result = await fetch ('https://jsonplaceholder.typicode.com/todos');
    const data = await result.json();
    console.log(data);
    return data
  } catch (error){
    console.error(error);
  }
}
asyncFetch()