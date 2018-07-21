import { LOGIN } from './API';


export async function login(username, password) {

  

  var formData = new FormData()
  formData.append('username', username)
  formData.append('password', password)


  try {
    const res = await fetch(LOGIN, {
    
     body :formData,
     method: 'POST',
     credentials: 'same-origin',
     mode: 'cors',
  
    });
    const auth_code = await res.json(); 
    console.log(auth_code);
    localStorage.setItem('auth_code', auth_code.token)
  } catch (e) {
    console.log(e);
  }

}
