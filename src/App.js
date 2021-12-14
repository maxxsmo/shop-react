import "./styles.css";
import Container from "./components/Container.js";
import Button from "./components/Button.js";
import Input from "./components/Input.js";
import Link from "./components/Link.js";

export default function App() {
  return (
    <Container>
      <Link href="https://www.amazon.fr/">Voir la boutique</Link>
      <Button type="submit" disabled={true}>
        Cliquez ici
      </Button>
      <Input placeholder="test" name="test name" />
    </Container>
  );
}
