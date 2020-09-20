 import { renderHook, act } from '@testing-library/react-hooks';
 import { useForm } from '../../components/hooks/useForm';
 import '@testing-library/jest-dom';

describe('Pruebas en <UseForm/>', () => {

    const initialForm = { 
        name:'Mauricio',
        email:'mauricio.cartagena@gmail.com'
    }

    test('Debe de regresar un formulario por defecto', () => {
        
        const { result } = renderHook( ()=> useForm( initialForm ) );

        const [ formValues, handleInputChange, reset ] = result.current;

        expect( formValues ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
       

    });

    test('Debe de cambiar el valor del formulario ( cambiar el name ) ', () => {
        
        const { result } = renderHook( () =>  useForm( initialForm )  );

        const [ , handleInputChange ] = result.current;

        act(()=>{

            handleInputChange({
                target:{
                    name:'name',
                    value:'Hello'
                }
            })

        });
        const [ formValues ] = result.current;
        expect( formValues ).toEqual({ ...initialForm,name:'Hello' });



    });

    test('Debe de re-establecer el formulario con RESET', () => {
        
        const { result } = renderHook( () =>  useForm( initialForm )  );

        const [ , handleInputChange,reset ] = result.current;

        act(()=>{

            handleInputChange({
                target:{
                    name:'name',
                    value:'Hello'
                }
            });
            reset();

        });
        const [ formValues ] = result.current;
        expect( formValues ).toEqual( initialForm );
 
    });
    
    
    

});
