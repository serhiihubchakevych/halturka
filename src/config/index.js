const devDomain = "http://localhost:3002/api/v1";
const prodDomain = "http://prod.com";

const dev = {
  DOMAIN: devDomain,

  url: {
    API_URL_ARTICLES: `${devDomain}/news`,
    API_URL_ARTICLE_WITH_PARAM_ID: `${devDomain}/news?id=`,
  },
};

const prod = {
  DOMAIN: devDomain,

  url: {
    API_URL_ARTICLES: `${prodDomain}/news`,
    API_URL_ARTICLE_WITH_PARAM_ID: `${prodDomain}/news?id=`,
  },
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
