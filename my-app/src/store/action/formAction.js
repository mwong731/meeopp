import firebase from '../../config/fbConfig'
const firestore = firebase.firestore();

export const load_form = () => {
    return  (dispatch) => {
        return firestore.collection('formData').orderBy('createdAt','desc').limit(1).get()
        .then((querySnapshot)=>{
            querySnapshot.forEach(function(doc) {
                dispatch({
                    type: 'LOAD_FORM',
                    payload: doc.data()
                })   
            });  
        }).catch((err) => {
            dispatch({
                type: 'LOAD_FORM_ERROR',
                payload: err
            })
        })
    }; 
};

export const save_form = (data) => {
    return (dispatch) => {
        return firestore.collection('formData').add({
            ...data,
            createdAt:new Date()
        }).then(() => {
            dispatch({
                type: 'SAVE_FORM',
                payload: data
            })    
        }).catch((err) => {
            dispatch({
                type: 'SAVE_FORM_ERROR',
                payload: err
            })
        })      
    }; 
}
