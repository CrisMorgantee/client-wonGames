import { Meta, Story } from '@storybook/react/types-6-0'
import Highlight, { HightlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead it s back',
    subtitle: 'Come see Jhon s new adventure',
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/red'
  }
} as Meta

export const Default: Story<HightlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HightlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
