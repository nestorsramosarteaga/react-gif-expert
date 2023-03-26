import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


describe('Test in the useFetchGifs Hook', () => { 

    test('should return the initial status', () => { 

        const { result } = renderHook( ()=> useFetchGifs('One Punch') );
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('should return an array from iamges and false to isLoading', async () => { 

        const { result } = renderHook( ()=> useFetchGifs('One Punch') );
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });

 });