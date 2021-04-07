import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  INIT_URL,
  SIGNOUT_USER_SUCCESS,
  USER_DATA,
  USER_TOKEN_SET
} from "../../constants/ActionTypes";
import axios from 'util/Api'
import {hostname} from "../../hostname"
export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url
  };
};

export const userSignUp = ({email, password, name}) => {
  console.log(email, password);
  return (dispatch) => {
    dispatch({type: FETCH_START});
    axios.post('auth/register', {
        email: email,
        password: password,
        name: name
      }
    ).then(({data}) => {
      console.log("data:", data);
      if (data.result) {
        localStorage.setItem("token_accrepro", JSON.stringify(data.token.access_token));
        axios.defaults.headers.common['authorization'] = "Bearer " + data.token.access_token;
        dispatch({type: FETCH_SUCCESS});
        dispatch({type: USER_TOKEN_SET, payload: data.token.access_token});
        dispatch({type: USER_DATA, payload: data.user});
      } else {
        console.log("payload: data.error", data.error);
        dispatch({type: FETCH_ERROR, payload: "Network Error"});
      }
    }).catch(function (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
      console.log("Error****:", error.message);
    });
  }
};

export const userSignIn = (data) => {
  return (dispatch) => {
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
    // axios.defaults.headers.common['Content-Type'] = 'application/X-WWW-form-urlencoded'
    // axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'DELETE, POST, GET, OPTIONS'
    // axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With,X-WWW-form-urlencoded'
    // axios.defaults.headers.common['Content-Type'] = 'x-www-form-urlencoded'
    // dispatch({type: FETCH_START});
    // localStorage.setItem("token_accrepro", 'kk');
    // dispatch({type: FETCH_SUCCESS});
    // dispatch({type: USER_TOKEN_SET, payload: 'kk'});
    // let formData = new FormData(); 
    // formData.append("email", data.email   )
    // formData.append("password", data.password   )
    axios.post(`${hostname}/api/auth/login`, {
        email: data.email,
        password: data.password,
      }
    ).then(({data}) => {
      console.log("userSignIn: ", data);
      localStorage.setItem("token_accrepro", JSON.stringify(data.accessToken));
      axios.defaults.headers.common['Authorization'] = "Bearer " + data.accessToken;
      dispatch({type: FETCH_SUCCESS});
      dispatch({type: USER_TOKEN_SET, payload: data.accessToken});
    }).catch(function (error) {
      // dispatch({type: FETCH_ERROR, payload: error.message});
      console.log("Error****:", error.message);
    });
  }
};
// *********organizations*********
export const createorganization = (data) => {
  return (dispatch) => {
    console.log(data)
    axios.post(`${hostname}/api/organization/create`, {
      name : data.name,
      company_type : data.company_type,
      organization_type : data.organization_type,
      email : data.email,
      state: data.state,
      country: data.country,
      city : data.city,
      address: data.address,
      phone: data.phone,
      cotact_person: data.cotact_person,
      package : data.package,
      no_client_admin: data.no_client_admin,
      no_updater: data.no_updater,
      no_viewer: data.no_viewer,
      no_surveyor: data.no_surveyor,
      parent_id: data.parent_id,
      library: data.library,
      valid_from: data.valid_from,
      valid_to: data.valid_to,
      }
    ).then(({data}) => {
      
    }).catch(function (error) {
      console.log("Error****:", error.message);
    });
  }
};
export const getorganization = (data) => {
  return (dispatch) => {
    dispatch({
      type : 'processbar',
      payload : 'start'
    })
    axios.get(`${hostname}/api/organization/get`).then(({data}) => {
      data.length === 0 ?       dispatch({
        type : `getorganizations`,
        payload : `nodata`,
      }) : dispatch({
        type : `getorganizations`,
        payload : data,
      })


      dispatch({
        type : 'processbar',
        payload : 'end'
      })
    }).catch(function (error) {
      console.log("Error****:", error.message);
      dispatch({
        type : 'processbar',
        payload : 'end'
      })
    });
  }
};
export const checkprocess = (data) => {
  return (dispatch) => {
      dispatch({
        type : 'processbar',
        payload : 'end'
      })
  }
};
// *********organizations*********

export const getlibrary = (data) => {
  return (dispatch) => {
    axios.get(`${hostname}/api/libraries/get`).then(({data}) => {
      console.log(data)
      dispatch({
        type : `getlibrarys`,
        payload : data
      })
    }).catch(function (error) {
      // dispatch({type: FETCH_ERROR, payload: error.message});
      console.log("Error****:", error.message);
    });
  }
};

export const getcountry = (data) => {
  return (dispatch) => {
    axios.get(`${hostname}/api/countries/get`).then(({data}) => {
      console.log(data)
      dispatch({
        type : `getcountries`,
        payload : data
      })
    }).catch(function (error) {
      // dispatch({type: FETCH_ERROR, payload: error.message});
      console.log("Error****:", error.message);
    });
  }
};
export const getpackage = (data) => {
  return (dispatch) => {
    axios.get(`${hostname}/api/subscription_packages/get`).then(({data}) => {
      console.log(data)
      dispatch({
        type : `getpackages`,
        payload : data
      })
    }).catch(function (error) {
      // dispatch({type: FETCH_ERROR, payload: error.message});
      console.log("Error****:", error.message);
    });
  }
};

export const getUser = () => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    axios.post('auth/me',
    ).then(({data}) => {
      console.log("userSignIn: ", data);
      if (data.result) {
        dispatch({type: FETCH_SUCCESS});
        dispatch({type: USER_DATA, payload: data.user});
      } else {
        dispatch({type: FETCH_ERROR, payload: data.error});
      }
    }).catch(function (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
      console.log("Error****:", error.message);
    });
  }
};


export const userSignOut = () => {

  return (dispatch) => {
    // dispatch({type: FETCH_START});
    localStorage.removeItem("token_accrepro");
        dispatch({type: FETCH_SUCCESS});
        dispatch({type: SIGNOUT_USER_SUCCESS});
    // axios.post('auth/logout').then(({data}) => {
    //   console.log("log out",data)
    //   if (data.result) {
    //     localStorage.removeItem("token_accrepro");
    //     dispatch({type: FETCH_SUCCESS});
    //     dispatch({type: SIGNOUT_USER_SUCCESS});
    //   } else {
    //     dispatch({type: FETCH_ERROR, payload: data.error});
    //   }
    // }).catch(function (error) {
    //   dispatch({type: FETCH_ERROR, payload: error.message});
    //   console.log("Error****:", error.message);
    // });
  }
};
