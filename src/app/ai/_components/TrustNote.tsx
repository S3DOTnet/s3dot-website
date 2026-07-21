import { Check } from "lucide-react";

const DEFAULT_LINES = [
  "相談無料・登録約1分",
  "AIに詳しくなくても問題ありません。無理な営業は行いません。",
];

export const FULL_LINES = [
  "相談無料・登録約1分",
  "AIに詳しくなくても問題ありません。",
  "診断後に契約する必要はありません。",
  "無理な営業は行いません。",
];

type Props = {
  lines?: string[];
  align?: "center" | "left";
  className?: string;
};

export default function TrustNote({ lines = DEFAULT_LINES, align = "center", className = "" }: Props) {
  return (
    <ul
      className={`flex flex-col gap-1.5 ${align === "center" ? "items-center text-center" : "items-start text-left"} ${className}`}
    >
      {lines.map((line) => (
        <li key={line} className="flex items-center gap-1.5" style={{ color: "rgba(143,164,184,0.75)", fontSize: "0.78rem" }}>
          <Check size={12} className="shrink-0" style={{ color: "#00E5A0" }} />
          {line}
        </li>
      ))}
    </ul>
  );
}
