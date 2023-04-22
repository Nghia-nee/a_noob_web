
const Main = (props) => {
    return (
      <div className="flex items-center justify-center mt-2 cursor-pointer hover:opacity-80 w-full xl:w-[500px] h-[100px] bg-[#fb98bb] rounded-xl p-2 text-center">
          <h2 className="font-semibold text-[30px]">{props.name}</h2>
        </div>
    )
  }
  
  export default Main