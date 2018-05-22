import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import retroCompatibilidad from './funciones/retroCompatibilidad';
import creatorHorario from './funciones/creatorHorario';

const initialstate = {
    cart:[],
    materias:[],
    carrera:{
        semestres:[]
    },
    data:[]
};


const reducer = (state  = initialstate, action) => {
    switch (action.type){
        case "Add_Asign":
            if (state.cart.some(asign => asign.codigo == action.product.codigo)){
                alert('esta materia ya fue añadida');
                return {
                    ...state
                };
            };
            if (state.cart.length >= 8){
                alert('maximo de materias alcanzada');
                return {
                    ...state
                };
            };
            if(retroCompatibilidad(action.product, state.cart, state.carrera)){
                alert ('No se puede añadir esta materia, verifique el pensum');
                return {
                    ...state
                };
            }
            return {
                ...state,
                cart: state.cart.concat(action.product)
            };

        case "Remove_Asign":
            return {
                ...state,
                cart: state.cart.filter(asign => asign.codigo != action.product.codigo)
            };

        case "Load_asignaturas":
            console.log(action.type)
            return {
                ...state,
                carrera: action.data
            };
        case "Materias_a_inscribir":
            return {
                ...state,
                materias: creatorHorario(action.data,state.cart),
                data: action.data
            };
    }
    return state;
};

const logger = ({ getState, dispatch }) => next => action => {
    console.log("dispatching", action);
    let result = next(action);
    console.log("next state", getState());
    return result;
};

const store = createStore(reducer, applyMiddleware(thunk, logger) );

export default store;
