import '@testing-library/jest-dom';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Pruebas en todoReducer', () => {

    const state = todoReducer( demoTodos,{} );
   
    test('debe de retornar el estado por defecto', () => {


        expect( state ).toEqual( demoTodos );

    });
    test('debe de agregar un TODO', () => {
        // const state = todoReducer( demoTodos,{} );
        // expect( state ).toEqual( demoTodos );

        const  demo = {
            id:3,
            desc:'Aprendiendo Node',
            done:false
        }; 
        const action = {
            type: 'add',
            payload: demo
        };
        const state = todoReducer( demoTodos, action  );
        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [ ...demoTodos, demo ] );

    });

    test('debe de borrar un TODO', () => {
        // action.payload = ID del TODO
        const action = {
            type:'delete',
            payload:1
        }

        const state = todoReducer( demoTodos, action );

        expect( state.length ).toBe( 1 );
        expect( state ).toEqual( [demoTodos[1]] );

    });

    test('debe de hacer el TOGGLE del TODO', () => {
        // action.paylod = ID del TODO
        const action = { 
            type: 'toggle',
            payload:1
        }
       
        const state = todoReducer( demoTodos, action );

        expect( state[0].done ).toBe( true );
        expect( state[1] ).toEqual( demoTodos[1] );

    });
    
});
