import { Meta, Story } from '@storybook/react/types-6-0'
import { Settings } from 'react-slick'
import styled from 'styled-components'
import Slider, { SliderProps } from '.'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const Slide = styled.div`
  width: 30rem;
  background-color: #999;
  border: 0.1rem solid blue;
  color: #fff;
  text-align: center;
  padding: 10rem 0;
`

export const Horizontal: Story<SliderProps> = () => (
  <Slider settings={settings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
)

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
}

export const Vertical: Story<SliderProps> = () => (
  <Slider settings={verticalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
)
