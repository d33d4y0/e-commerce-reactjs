type Props = {
  content: string;
};

const SubmitButton = (props: Props) => {
  return (
    <button
      className="w-[456px] rounded-lg bg-neutral-900 px-10 py-2.5"
      type="submit"
    >
      <div className="text-center font-['Inter'] text-base font-medium leading-7 text-white">
        {props.content}
      </div>
    </button>
  );
};

export default SubmitButton;
