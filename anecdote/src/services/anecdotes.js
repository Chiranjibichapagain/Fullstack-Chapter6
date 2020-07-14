import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create=async(newAnecdote)=>{
  const anecdote= {
    content:newAnecdote,
    votes:0
  }
  const response= await axios.post(baseUrl, anecdote)
  return response.data
}

const update= async(toChange)=>{
  const response= await axios.put(`${baseUrl}/${toChange.id}`, {...toChange, votes:toChange.votes+1})
  return  response.data

}

export default { getAll, create, update };
