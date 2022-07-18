import { useState } from "react";
import { Envelope, Key } from "phosphor-react-native";
import { VStack, Heading, Icon, useTheme } from "native-base"
import { Input } from '../components/input';
import { Button } from "../components/button";
import Logo from '../assets/logo_primary.svg';

export const SignIn = () => {
  const { colors } = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log({ email, password })
  }

  return (
    <VStack flex={1} alignItems='center' bg='gray.600' px={8} pt={24}>
      <Logo />

      <Heading color='gray.100' fontSize='xl' mt={20} mb={6}>
        Acesse a sua conta
      </Heading>

      <Input
        mb={4}
        placeholder='E-mail'
        InputLeftElement={<Icon ml={3} as={<Envelope color={colors.gray[300]} />} />}
        onChangeText={setEmail}
      />

      <Input
        mb={8}
        secureTextEntry
        placeholder='Senha'
        InputLeftElement={<Icon ml={3} as={<Key color={colors.gray[300]} />} />}
        onChangeText={setPassword}
      />

      <Button title='Entrar' w='full' onPress={handleSignIn} />
    </VStack>
  );
}