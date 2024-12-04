import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import PrimaryButton from '../components/PrimaryButton';

const meta = {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '480px', width: '360px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '버튼 text',
      defaultValue: 'icon',
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    theme: 'activeV1',
    isDisabled: false,
  },
};

export const PrimaryV2: Story = {
  args: {
    children: 'Button',
    theme: 'activeV2',
    isDisabled: false,
  },
};

export const PrimaryIn: Story = {
  args: {
    children: 'Button',
    theme: 'inActiveV1',
    isDisabled: false,
  },
};

export const PrimaryInV2: Story = {
  args: {
    children: 'Butto1212n',
    theme: 'inActiveV2',
    isDisabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    theme: 'activeV2',
    isDisabled: true,
  },
};
