import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Code,
} from "@mantine/core";
import { useForm} from '@mantine/form'

const Login = () => {

    const formData = useForm({
        initialValues: {
            email: '',
            password: '',
        }
    })


  return (
    <>
      <Container size={420} my={40}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="email@gmail.com" required 
          {...formData.getInputProps('email')}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            {...formData.getInputProps('password')}
          />
          <Group position="apart" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl"
          onClick={() => {
            
           
          }}
          
          >
            Sign in
          </Button>
        </Paper>
        <Code>{JSON.stringify(formData.values)}</Code>
      </Container>
    </>
  );
};

export default Login;
