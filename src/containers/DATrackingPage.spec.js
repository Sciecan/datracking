import React from 'react';
import {shallow} from 'enzyme';
import {DATrackingPage} from './DATrackingPage';
import DATrackingForm from '../components/DATrackingForm';

describe('<DATrackingPage />', () => {
  it('should contain <DATrackingForm />', () => {
    const actions = {};
    const applications = [];
    const count = 0;
    const pagination = {};
    const wrapper = shallow(<DATrackingPage actions={actions} applications={applications} count={count} pagination={pagination}/>);

    expect(wrapper.find(DATrackingForm).length).toEqual(1);
  });
});
