import fire from '../fire'

export var search = (ingredients) => {
  return {
    type: 'SEARCH_BY_INGREDIENTS',
    ingredients
  };
};

export var showAll = (recipes) => {
  return {
    type: 'SHOW_RECIPE',
    recipes
  };
};

export var idURL = (id) => {
  return {
    type: 'GRAB_URL',
    id
  }
}

export var attemptRegister = (params) => {
    return dispatch => {
        console.log('creating user...')
        fire.auth().createUserWithEmailAndPassword(params.email, params.password).then( user => {
            console.log('user created:', user.email);
            // firebase.auth().signInWithEmailAndPassword(email, password)

        }).catch( err => {
            //
        })
    }
};

export var attemptLogin = (params) => {
    return dispatch => {
        fire.auth().signInWithEmailAndPassword(params.email, params.password).then( user => {
            console.log('user logged in: ', user.email);
            dispatch({type:'LOGIN_SUCCESFUL'})
        }).catch( err => {
            console.log("error: ", err)
            //
        })
    }


}

export var Logout = (params) => {
    return dispatch => {
        fire.auth().signOut().then( () => {
            console.log('user logged out ');
        }).catch( err => {
            console.log("error: ", err)
            //
        })
    }


}

export var setLoggedInUser = (user) =>{
    return { type:'SET_LOGGED_IN_USER', user };
}
