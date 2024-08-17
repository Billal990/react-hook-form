import { Input, ThemeProvider } from "@material-tailwind/react";
import { inputCustomTheme } from "../utils/inputCustomTheme";

export default function MaterialInput() {
  return (
    <ThemeProvider value={inputCustomTheme}>
      <div>
        <label htmlFor="userName">User Name</label>
        <Input size="md" label="Enter user name..." />
      </div>
    </ThemeProvider>
  );
}
