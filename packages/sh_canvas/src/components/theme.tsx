import "../../theme/globals.scss";
import { font } from "../lib/globals";

export function Theme({
  children,
  default_font_classname,
  header_font_classname,
}: {
  children: React.ReactNode;
  default_font_classname: string;
  header_font_classname: string;
}): JSX.Element {

  font.DEFAULT = default_font_classname
  font.HEADER = header_font_classname

  return (
    <main className={default_font_classname}>
      {children}
    </main>
  );
}