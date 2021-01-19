//Packages
import { createServer } from "miragejs"

//scripts
import routes from './routes.json';
import loginInfo from './data/security-login.json'
import URL from '../../utils/config'

export default createServer({
  routes() {
    this.post(`${URL}${routes.login}`, (schema, request) => {
      const {email, password} = JSON.parse(request.requestBody)
      if (email === loginInfo.user.email && password === loginInfo.user.password) {
        return { status: 201, res: loginInfo, error: false}
      } else {
        return { status: 401, res: {}, error: true}
      }
    })
  },
})