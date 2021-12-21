import "./styles.css";
import Container from "./components/Container.js";
import Button from "./components/Button.js";
import Input from "./components/Input.js";
import Link from "./components/Link.js";

export default function App() {
  return (
    <Container className="app">
      <Link href="https://react-tutorial.app">Voir la boutique</Link>
      <Button type="submit" disabled={true}>
        Login
      </Button>
      <Input placeholder="Full Name" name="full_name" />
    </Container>
  );
}
