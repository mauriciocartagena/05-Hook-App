import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoListItem/>', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    

    const wraper = shallow( 

        <TodoListItem
            todo= { demoTodos[0] }
            index={ 0 }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />

    )
    
    test('Debe de mostrarse correctamente', () => {
        //snapshot

        expect( wraper ).toMatchSnapshot();
       
    });
    test('Debe de llamar la función handleDelete', () => {
        
        wraper.find( 'button' ).simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );

    });
    test('Debe de llamar la función handleToggle', () => {
        //jest.fn()
        //toHaveBeenCalledWith
        wraper.find( 'p' ).simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );

    });
    test('Debe de mostrar el texto correactamente', () => {
        
        const p = wraper.find( 'p' );

        expect( p.text().trim() ).toBe(`1. ${ demoTodos[0].desc }`);

    });
    test('Debe de tener la clases complete si el TODO.done =  true', () => {
    
        const todo = demoTodos[0];
        todo.done = true;

        const wraper = shallow( 
    
            <TodoListItem
                todo= { todo }
            />
    
        );
        expect( wraper.find('p').hasClass('complete') ).toBe( true );

    });

});
