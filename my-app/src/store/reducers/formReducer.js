
const initialState = {
    firstName:'',
    lastName:'',
    company:'',
    department:'',
    position:'',
    email:''
};

export default function(state = initialState, action ) {
        switch(action.type) {
        case'LOAD_FORM':
        return {
            ...state,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            company: action.payload.company,
            department: action.payload.department,
            position: action.payload.position,
            email: action.payload.email
        };
        case 'LOAD_FORM_ERROR':
            console.log('load project error', action.payload);
            return state;
        case'SAVE_FORM':
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                company: action.payload.company,
                department: action.payload.department,
                position: action.payload.position,
                email: action.payload.email
            };
        case 'SAVE_FORM_ERROR':
            console.log('save project error', action.payload);
            return state;
        default: 
            return state;
    }
}
