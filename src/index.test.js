import React from 'react';
import { render } from '@testing-library/react';
import Layout from './index';
import '@testing-library/jest-dom';

test('renders index element', ()=>{
    const { getByText } = render(<Layout/>);
    const title = getByText(/Tic Tac Toe/i);
    expect(title).toBeInTheDocument();
});