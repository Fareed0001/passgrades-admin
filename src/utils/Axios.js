import axios from "axios";

export default axios.create({
  baseURL: "https://passmark.eu-north-1.elasticbeanstalk.com/api/v1/admin",
});
