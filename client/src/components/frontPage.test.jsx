import { render, screen } from '@testing-library/react';
import FrontPage from './FrontPage';
import { beforeEach, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';


describe('Front page and its elements', () => {
    
    const mockHandler = vi.fn()

    beforeEach(() => {
        render(<FrontPage navigate={mockHandler}/>, {
            wrapper: ({children}) => (
                <MemoryRouter initialEntries={["/"]}>
                    <Provider>
                        {children}
                    </Provider>
                </MemoryRouter>
            )
        })
    })

    test('renders title', () => {
        const element = screen.getByText('Task App')
        expect(element).toBeDefined()
    })

    test('Login button click should call navigate function', async () => {
        const user = userEvent.setup()
        const button = screen.getByText('Login')
        await user.click(button)
        
        expect(mockHandler.mock.calls).toHaveLength(1)
    })
})