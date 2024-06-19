import ArrowRight from "@/components/ArrowRight/ArrowRight";

interface SelectCardProps {
  title: string;
  subtitle: string;
  selected: boolean;
  onClick: () => void;
}

export default function SelectCard({
  title,
  subtitle,
  selected,
  onClick,
}: SelectCardProps) {
  return (
    <div
      onClick={onClick}
      className={`flex justify-between items-center h-full cursor-pointer px-[26px] lg:w-full border-b min-w-[300px] ${
        selected
          ? "border-b-[#C89305]"
          : "border-b-[#7E7873] transition-all hover:opacity-75"
      }`}
    >
      <div className="flex flex-col max-w-[162px] text-[20px]">
        {title}
        <p className={`${selected ? "text-[#C89305]" : "text-white"}`}>
          {subtitle}
        </p>
      </div>
      <ArrowRight />
    </div>
  );
}
