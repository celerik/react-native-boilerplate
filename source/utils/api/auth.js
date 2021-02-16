//@scripts
import URL from '../../utils/config';
import routes from '../../config/mockData/routes.json'

export const logIn = (email, password) => {
    const jsonLogIn = {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    return fetch(`${URL}${routes.login}`, jsonLogIn);
}