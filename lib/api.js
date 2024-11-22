import axios from "axios"

// const baseURL = process.env.NEXT_SERVER_URL

axios.defaults.baseURL = process.env.NEXT_SERVER_URL

export async function getAllStudents() {
  try {
    const response = await axios.get('/students')
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function logIn(req) {
  try {
    const response = await axios.post('/auth/login', req)
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
