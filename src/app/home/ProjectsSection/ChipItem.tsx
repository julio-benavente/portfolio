import cls from "@/helpers/cls";

const ChipItem = ({
  data,
  isActive,
  onClick,
}: {
  data: any;
  isActive: boolean;
  onClick?: (props: any) => void;
}) => {
  return (
    <div
      className={cls(
        "grid  px-3 py-1 max-w-min auto-cols-auto grid-flow-col items-center rounded-full gap-2 font-bold cursor-pointer whitespace-nowrap",
        { "bg-primary text-white": isActive }
      )}
      onClick={onClick}
    >
      <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
      {data}
    </div>
  );
};

export default ChipItem;
