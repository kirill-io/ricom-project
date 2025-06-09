import { useEffect, useRef } from "react";
import IMask from "imask";
import type { InputMask } from "imask";

interface MaskedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  mask: string;
  onAccept?: (value: string) => void;
}

const MaskedInput: React.FC<MaskedInputProps> = ({
  mask,
  onAccept,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const maskRef = useRef<InputMask<any> | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      maskRef.current = IMask(inputRef.current, { mask });

      maskRef.current.on("accept", () => {
        const value = maskRef.current?.value || "";
        onAccept?.(value);
      });
    }

    return () => {
      maskRef.current?.destroy();
    };
  }, [mask, onAccept]);

  return <input ref={inputRef} {...props} />;
};

export default MaskedInput;
