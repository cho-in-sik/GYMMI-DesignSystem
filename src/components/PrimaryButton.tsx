type PrimaryButtonTheme = 'activeV2' | 'inActiveV2' | 'activeV1' | 'inActiveV1';

interface IPrimaryButtonProps {
  theme: PrimaryButtonTheme;
  isDisabled?: boolean;
  children: string;
  onClick?: () => void;
}

const activeV1 = 'bg-[#1d4ed8] text-white rounded-lg h-12 text-md';
const inActiveV1 = 'bg-buttonInActive text-[#1d4ed8] rounded-lg h-12 text-md';
const activeV2 = 'bg-[#1d4ed8] text-white rounded-full h-9 text-sm';
const inActiveV2 = 'bg-buttonInActive text-[#1d4ed8] rounded-full h-9 text-sm';

const disabledStyle =
  'disabled:bg-main disabled:text-white disabled:opacity-70';

const color: Record<PrimaryButtonTheme, string> = {
  activeV1,
  inActiveV1,
  activeV2,
  inActiveV2,
};

export default function PrimaryButton({
  children,
  theme,
  onClick,
  isDisabled,
}: IPrimaryButtonProps) {
  return (
    <button
      className={`w-full ${color[theme]} ${disabledStyle}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
