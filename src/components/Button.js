const Button = ({ name }) => {
  return (
    <div className="px-[14px] py-[6px] bg-slate-200 border border-slate-600 hover:bg-slate-800 hover:text-gray-50 my-2 mx-1 rounded-lg font-light text-sm cursor-pointer">
      <span>{name}</span>
    </div>
  );
}

export default Button;