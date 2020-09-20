import { renderHook,act } from "@testing-library/react-hooks";
import '@testing-library/jest-dom';

import { useMulti } from "../../components/hooks/useMulti";

describe('Pruebas de useCounter', () => {
   
    test('Debe de retornar valores por defecto ', () => {
        
        const { result } = renderHook( () => useMulti() );

        expect( result.current.counter ).toBe(10);

        // esto sirve para verificar si es una funcion o no
        expect( typeof result.current.increment ).toBe( 'function' );
        expect( typeof result.current.decrement ).toBe( 'function' );
        expect( typeof result.current.reset ).toBe( 'function' );


    });

    test('Debe de tener el counter en 100 ', () => {
        
        const { result } = renderHook( () => useMulti( 100 ) );
        
        expect( result.current.counter ).toBe(100);
    });

    test('Debe de incrementar el counter en 1', () => {

        const { result } = renderHook( () => useMulti( 100 ) );

        const { increment } = result.current;
        
       act( ()=>{

        increment();

       });
       
       const { counter } = result.current;

       expect( counter ).toBe( 101 );

    });
    test('Debe de decrementar el counter en 1', () => {
       
        const { result } = renderHook( () => useMulti( 100 ) );

        const { decrement } = result.current;

        act(()=>{

            decrement();

        });
        
        const { counter } = result.current;

        expect( counter ).toBe( 99 );
        
    });
    test('Debe de resetear al valor enviado', () => {
       
        const { result } = renderHook( () => useMulti( 100 ) );

        const {  decrement,reset } = result.current;

        act(()=>{

            decrement();
            reset();

        });
        
        const { counter } = result.current;

        expect( counter ).toBe( 100 );
        
    });
    
    

});
