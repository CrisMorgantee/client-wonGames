import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

const FormProfile = () => {
  return (
    <S.Wrapper>
      <Heading lineBottom color="black" size="small">
        My profile
      </Heading>

      <S.Form>
        <TextField
          name="name"
          label="Name"
          placeholder="Name"
          initialValue="John Doe"
        />

        <TextField
          type="email"
          name="email"
          label="Email"
          initialValue="johndoe@gmail.com"
          placeholder="Email"
          disabled
        />

        <TextField
          type="password"
          name="password"
          label="Password"
          placeholder="Type your password"
        />

        <TextField
          type="password"
          name="new_password"
          label="New password"
          placeholder="New password"
        />

        <Button size="large">Save</Button>
      </S.Form>
    </S.Wrapper>
  )
}

export default FormProfile
