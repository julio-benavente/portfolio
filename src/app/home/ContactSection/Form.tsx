import { TextField } from "@/helpers/mui";
import * as C from "@/components";

const Form = () => {
  return (
    <form className="flex flex-col gap-8">
      <TextField id="name" label="What's your name?" variant="outlined" />
      <TextField id="email" label="And your email?" variant="outlined" />
      <TextField
        id="message"
        label="Leave me your message"
        multiline
        rows={6}
        maxRows={6}
        variant="outlined"
      />
      <C.Button size="large">Send that message!</C.Button>
    </form>
  );
};

export default Form;
