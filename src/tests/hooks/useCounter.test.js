import { renderHook } from "@testing-library/react-hooks";
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
    

});
