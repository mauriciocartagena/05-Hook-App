import { shallow } from 'enzyme';
import React from 'react';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import '@testing-library/jest-dom';

import { useFetch } from '../../../components/hooks/useFetch';
import { useMulti } from '../../../components/hooks/useMulti';
jest.mock('../../../components/hooks/useFetch');
jest.mock('../../../components/hooks/useMulti');

describe('Pruebas en <MultipleCustomHooks/>', () => {

    useMulti.mockReturnValue({
        counter:10,
        increment: () => {}
    });


    
    test('Debe de mostrarse correctamente', () => {
       
        useFetch.mockReturnValue({
            data:null,
            loading:true,
            error:null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper ).toMatchSnapshot();
        
    });
    test('debe de mostrar la información', () => {
        
        useFetch.mockReturnValue({
            data:[{
                author:'Mauricio',
                quote:'Hola mundo'
            }],
            loading:false,
            error:null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper.find( '.alert' ).exists() ).toBe(false);
        expect( wrapper.find( '.mb-0' ).text().trim() ).toBe('Hola mundo');
        expect( wrapper.find( 'footer' ).text().trim() ).toBe('Mauricio');

    })
    
    

});
