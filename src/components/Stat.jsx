

const Stat = ({value, title})=>(
        
    <div className="flex w-[270px] flex-1 items-center gap-6 ">
        <strong className="text-[32px] text-white sm:text-[42px] ">
          {value}
        </strong>
        <span className="text-gradient lg:relative">{title}</span>
    </div>
)
  
  

export default Stat;