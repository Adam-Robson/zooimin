import "@/_components/main.css";
import ThemeImage from "@/_components/theme-image";
import { ThemeProvider } from "@/_contexts/ThemeProvider";

export default function MainPage() {
  return (
    <main className="main container">
      <ThemeProvider>
        <ThemeImage />
      </ThemeProvider>
    </main>
  );
}
