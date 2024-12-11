import axios from "axios";

const ApiKey = "47478634-7e7e3729cfcb872ecd478ef23";
const URL = `https://pixabay.com/api/?key=${ApiKey}`;

const formateUrl = (params) => {
  let url = URL + "&per_page=25&safesearch=true&editors_choice=true";
  if (!params) return url;
  let paramKeys = Object.keys(params);
  paramKeys.map((key) => {
    let value = key === "q" ? encodeURIComponent(params[key]) : params[key];
    url += `&${key}=${value}`; // Fix: Add '=' between key and value
  });

  console.log("Final URL:", url);
  return url;
};

export const apiCall = async (params) => {
  try {
    const response = await axios.get(formateUrl(params));
    const { data } = response;
    return { success: true, data };
  } catch (err) {
    console.log("Got errors", err.message);
    return { success: false, msg: err.message };
  }
};
