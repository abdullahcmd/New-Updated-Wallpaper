import axios from "axios";

const ApiKey = "47478634-7e7e3729cfcb872ecd478ef23";
const URL = `https://pixabay.com/api/?key=${ApiKey}`;

const formateUrl = (params) => {
  let url = URL + "&per_page=25&safesearch=true&editors_choice=true";
  if (params.category) {
    url += `&category=${params.category}`; // Append the category to the URL
  }
  if (params.page) {
    url += `&page=${params.page}`; // Append the page number to the URL
  }
  if (!params.category) {
    url += `&q=`; // For default images when no category is selected
  }
  
  console.log("Final URL:", url);
  return url;
};

export const apiCall = async (params) => {
  try {
    const response = await axios.get(formateUrl(params)); // Make API call
    const { data } = response;
    return { success: true, data };
  } catch (err) {
    console.log("Got errors", err.message);
    return { success: false, msg: err.message };
  }
};

