import axios from "axios";

export const getAllPosts = async () => {
  let result = [];
  await axios
    .get(`https://rocketit.com.br/barbo/wp-json/wp/v2/posts?categories=1&per_page=99`)
    .then((res) => {
      console.log("getAllPosts result", res.data);
      result = { data: [...res.data], error: false };
    })
    .catch((error) => {
      console.log("getAllPosts catch", error);
      result = { error: true };
    });
  return result;
};


export const getPostById = async (id) => {
  let result = [];
  await axios
    .get(`https://rocketit.com.br/barbo/wp-json/wp/v2/posts/` + id)
    .then((res) => {
      console.log("getPostById result", res.data);
      result = { ...res.data, error: false };
    })
    .catch((error) => {
      console.log("getPostById catch", error);
      result = { error: true };
    });
  return result;
};

// export const getPostByUrl = async (url) => {
//   let result = [];
//   await axios
//     .get(url)
//     .then((res) => {
//       console.log("getPostByUrl result", res.data);
//       result = res.data;
//     })
//     .catch((error) => {
//       console.log("getPostByUrl catch", error);
//       result = null;
//     });
//   return result;
// };

export const getImgPost = async (id) => {
  let result = [];
  await axios
    .get('http://localhost:21038/api/enterprise/getall' + id)
    .then((res) => {
      console.log("getImgPost result", res.data);
      result = { ...res.data, error: false };
    })
    .catch((error) => {
      console.log("getImgPost catch", error);
      result = { error: true };
    });
  return result;
};