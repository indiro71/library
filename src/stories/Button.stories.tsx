import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '../components';

export default {
  title: 'Example/Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = ({label, type, name}) => {
  return (
    <Button label={label} type={type} name={name} />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Label',
  name: 'name',
};
