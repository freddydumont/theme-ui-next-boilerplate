import Link from 'next/link';
import { Button, Container, Flex, NavLink, useColorMode } from 'theme-ui';

export default function Header() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    // see theme.layout.container for styles
    <Container as="header">
      <Flex as="nav">
        {/* passHref is required with NavLink */}
        <Link href="/" passHref>
          <NavLink p={2}>Home</NavLink>
        </Link>
        <Link href="/style" passHref>
          <NavLink p={2}>Style Guide</NavLink>
        </Link>
        <Button
          ml="auto"
          onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
        >
          Toggle {colorMode === 'dark' ? 'Light' : 'Dark'}
        </Button>
      </Flex>
    </Container>
  );
}
