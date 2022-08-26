import { render, screen } from "@testing-library/react";
import PostCard from ".";
import { postMock } from './mockData';

const props = postMock;

describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
        render(<PostCard {...props} />);

        expect(screen.getByRole('img', { name: /Title 1/i })).toHaveAttribute('src', props.cover);
        expect(screen.getByRole('heading', { name: 'Title 1 1' })).toBeInTheDocument();
        expect(screen.getByText('Body 1')).toBeInTheDocument();
        expect(screen.getByAltText(/Title 1/i)).toHaveAttribute('src', 'img/img.png');

    });
 
    it('should match snapshot', () => {
        const { container } = render(<PostCard {...props} />);

        expect(container.firstChild).toMatchSnapshot();

    });
});