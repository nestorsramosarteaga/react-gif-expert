import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('Test <GifItem />>', () => { 

    const title = 'Saitama';
    const url   = 'https://one-punch.com/saitama.jpg';


    test('Should match with snapshot', () => {
        
        const { container } = render(<GifItem title={ title } url={ url } />);

        expect( container ).toMatchSnapshot();

    })

    test('Should display the imag with url and ALT', () => { 

        render(<GifItem title={ title } url={ url } />);
        //screen.debug();
        // console.log( screen.getByRole('img').src );

        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

    })

    test('Should display the title in the component', () => { 

        render(<GifItem title={ title } url={ url } />);
        expect( screen.getByText( title ) ).toBeTruthy();

    })

 })