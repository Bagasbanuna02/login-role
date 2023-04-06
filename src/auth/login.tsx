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
import { useForm } from "@mantine/form";

const Login = () => {
  const formData = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const onLogin = () => {
    // console.log("hai")
    fetch("/api/auth/login", {method: "POST", body: JSON.stringify(formData.values)})
    .then((res) => res.json())
    .then((val) => console.log(val,"Dari server"))
  }

  return (
    <>
      <Container size={420} my={40}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            label="Email"
            placeholder="email@gmail.com"
            required
            {...formData.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            {...formData.getInputProps("password")}
          />
          <Group position="apart" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor href="">Create Account</Anchor>
            
          </Group>
          <Button fullWidth mt="xl" onClick={onLogin}>
            Sign in
          </Button>
        </Paper>
        <Code>{JSON.stringify(formData.values)}</Code>
      </Container>
    </>
  );
};

export default Login;
