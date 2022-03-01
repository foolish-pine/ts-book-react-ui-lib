import { Text } from "./libs/Text";
import { Heading } from "./libs/Heading";
import { Button } from "./libs/Button";
import { Textarea } from "./libs/Textarea";
import { Input } from "./libs/Input";

export const App = () => {
  return (
    <>
      <Text text="true" />
      <Heading tag="h1">見出し</Heading>
      <Heading tag="h1">
        <span>Hello, World!</span>
      </Heading>
      <Button
        onClick={() => console.log("clicked")}
        title="Button"
        type="primary"
        width={96}
      />
      <Button
        onClick={() => console.log("clicked")}
        title="Button"
        type="secondary"
        width={96}
      />
      <Button
        onClick={() => console.log("clicked")}
        title="Button"
        type="error"
        width={96}
      />
      <Textarea maxLength={20} width={500} />
      <Input type="text" />
      <Input type="text" error />
    </>
  );
};
