import { getJSON } from 'jquery';

const loadAsign = obj => {
    return dispatch => {
        getJSON(obj.url, data => dispatch ({"type":obj.type, data:data}))
    };
};

const addAsign = product => {
    return {
        "type":"Add_Asign",
        product
    }
};

const removeAsign = product => {
    return {
        "type":"Remove_Asign",
        product
    }
};

export {addAsign, removeAsign, loadAsign};
