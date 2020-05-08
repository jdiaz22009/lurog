import axios from 'axios'

const http = async (method, url, data, headers) => {
  try {
    const options = { method, headers, data, url }
    console.log("--Cliente.http-- options: ", JSON.stringify(options))
    return await axios(options)
  } catch (e) {
    throw e
  }

}
export const request = async (method, data, auth) => {
  let headers = { "content-type": "application/json" }
  if (auth) {
    headers["Authorization"] = auth
  }
  try {
    console.log("--Cliente.Request-- data: ", JSON.stringify(data))
    console.log("--Cliente.Request-- header: ", headers)
    return await http(method, data.url, data.params, headers)
  } catch (e) {
    throw e
  }
}
