import { render } from '@testing-library/react';
import { Card } from './card'

const props = {
    title: 'test card',
    description: 'description for test card',
    buttons: []
}

describe('lib:ui Card.tsx', () => {
    it('should render successfully', () => {
        const { queryByText } = render(<Card {...props} />);
        expect(queryByText(props.title)).toBeDefined()
        expect(queryByText(props.description)).toBeDefined();
    });
});