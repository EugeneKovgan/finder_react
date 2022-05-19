import axios from "axios";

async function API(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    // console.log(response)
    const userGetedInfo = response.data;
    console.log(userGetedInfo);
    return userGetedInfo
  } catch (e) {
    console.log(e);
  }
}

export default API;