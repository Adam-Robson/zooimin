import ButtonCard from "@/_components/_button-card/button-card";
import "@/_components/footer.css";
import ThemeButton from "@/_components/theme-button";
import { ThemeProvider } from "@/_contexts/ThemeProvider";

export default function footer() {
  return (
    <footer className="footer">
      <ButtonCard />
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>
      <span className="span">&copy; {new Date().getFullYear()} Le Fog</span>
    </footer>
  );
}
