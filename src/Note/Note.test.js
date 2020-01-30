import React from 'react';
import ReactDOM from 'react-dom';
import Note from './Note';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Note Component', () => {
    const props = {
        id: 'abcd',
        name: 'test note',
        modified: '2020-01-30'
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Note />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders note given props', () => {
        const wrapper = shallow(<Note {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})