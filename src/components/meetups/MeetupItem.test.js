import React from 'react';
import { shallow, mount } from 'enzyme';
import { FavoritesProvider } from './../../context/FavoritesContext';
import MeetupItem from './MeetupItem';

const mockItem = {
  id: '1',
  title: 'Test Meetup',
  image: 'https://example.com/image.jpg',
  address: '123 Test St',
  description: 'This is a test meetup.',
};

describe('<MeetupItem />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <FavoritesProvider>
        <MeetupItem item={mockItem} />
      </FavoritesProvider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct content', () => {
    const wrapper = mount(
      <FavoritesProvider>
        <MeetupItem item={mockItem} />
      </FavoritesProvider>
    );
    expect(wrapper.find('h3').text()).toBe(mockItem.title);
    expect(wrapper.find('address').text()).toBe(mockItem.address);
    expect(wrapper.find('p').text()).toBe(mockItem.description);
  });

  it('toggles favorite status when button is clicked', () => {
    const wrapper = mount(
      <FavoritesProvider>
        <MeetupItem item={mockItem} />
      </FavoritesProvider>
    );

    const button = wrapper.find('button');
    expect(button.text()).toBe('Add to favorites');

    button.simulate('click');
    expect(wrapper.find('button').text()).toBe('Remove from favorites');

    button.simulate('click');
    expect(wrapper.find('button').text()).toBe('Add to favorites');
  });
});
