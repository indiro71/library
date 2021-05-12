import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '../components';

import '../../dist/index.css';
import '../tailwind.module.css';

export default {
  title: 'Example/Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = ({label, type, name}) => {
  return (
    <div className="w-1/6">
      <Button label={label} type={type} name={name} />
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  label: 'Label',
  name: 'name',
};
