import { screen, render } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test in <GifGrid />', () => { 
    
    const category = 'One Punch';

    test('Should display the loading initially', () => {
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );
        //screen.debug();

    });

    test('Should display items when the images are loaded from useFetchGifs', () => {
        
        const gifs = [ 
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'http://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'http://localhost/goku.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getAllByRole('img').length ).toBe(2);

        screen.debug();
    });

 });