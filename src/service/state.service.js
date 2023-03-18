import axios from "axios";

export const getAllEnterprises = async () => {
  let result = [];
  await axios
    .get(`http://localhost:21038/api/enterprise/getall`)
    .then((res) => {
      console.log("getAllEnterprises result", res);
      result = { ...res.data, error: false };
    })
    .catch((error) => {
      console.log("getAllEnterprises catch", error);
      result = { error: true };
    });
  return result;
};

export const getAllMains = async () => {
  let result = [];
  await axios
    .get(`http://localhost:21038/api/enterprise/getMains`)
    .then((res) => {
      console.log("getAllMains result", res);
      result = { ...res.data, error: false };
    })
    .catch((error) => {
      console.log("getAllMains catch", error);
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
    .get('http://localhost:21038/api/upload/image/0/1?type=0&id=1' + id)
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



