import { config } from "../../config";

const createArticleAPI = async (articleObj) => {
  try {
    const response = await fetch(config.url.API_URL_ARTICLES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: "d8053d37-e5cd-49e5-a56f-40a3f77aab5d",
        mode: "no-cors",
      },
      body: JSON.stringify(articleObj),
    });

    console.log("b");
    if (response.status > 204) {
      throw new Error();
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export { createArticleAPI };
