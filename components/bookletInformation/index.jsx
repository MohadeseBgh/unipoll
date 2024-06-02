import Like from "@/components/icons/Like";
import Like_fill from "@/components/icons/Like_fill";
import like from "@/components/icons/Like";


const BookletInformation = (props) => {
    return(

    <div className={"pr-4 mt-5 w-[32rem] mx-auto h-[36rem] shadow-2xl rounded-3xl bg-opacity-15 bg-[#1FAAEA] "} dir={'rtl'}>

        <div className={"flex flex-col h-1/12 gap- "} >

        <p className={"font-bold text-red-700  pt-4  pl-2 "} dir={'ltr'}> حذف </p>
        <div className={"flex flex-row h-2/12  "} >
            <p className={"font-bold text-black text-2xl"}>مشخصات جزوه</p>
            <div className={'h-1 w-8/12  bg-darkBlue mt-6 mr-3 '} dir={'ltr'}></div>
        </div>
        <div className={"flex flex-col h-2/12 gap-6 "} >
            <div className={"flex flex-row gap-8 mt-8 "}>
                <p className="font-bold text-xl laptop: text-2xl  font-bold text-black">انتشار دهنده:  </p>
                <p className="   text-lg laptop: text-1xl text-black   "> {props.publisher} </p>
            </div>
            <div className={"flex flex-row gap-8 "}>
                <p className="font-bold text-xl laptop: text-2xl  font-bold text-black">درس مربوطه:  </p>
                <p className="   text-lg laptop: text-1xl text-black   "> {props.lesson} </p>
            </div>
            <div className={"flex flex-row gap-8 "}>
                <p className="font-bold text-xl laptop: text-2xl  font-bold text-black">استاد درس:  </p>
                <p className="   text-lg laptop: text-1xl text-black   "> {props.professor} </p>
            </div>
            <div className={"flex flex-row gap-8 "}>
                <p className="font-bold text-xl laptop: text-2xl  font-bold text-black">ترم:  </p>
                <p className="   text-lg laptop: text-1xl text-black   "> {props.term} </p>
            </div>
            <div className={"flex gap-8 "}>
                <p className="font-bold text-xl laptop: text-2xl  font-bold text-black">توضیحات:  </p>
                <div className={"bg-gray-300 h-[11rem] w-4/6 rounded-[1.25rem] "}>
                    <p className={"p-4"}>
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
        <div className={"flex flex-col h-2/12 "}>
            <div className={'h-1 w-11/12  bg-darkBlue mt-6 mr-3 '} dir={'ltr'}></div>
            <div className='flex flex-col gap-1 pr-9 '>
                <div className={"flex flex-row"}>
                    <p className="text-sm text-black justify-end  "  dir="ltr"> {props.like } </p>  /* like number*/
                    <button
                        className='flex flex-row  justify-start items-center '
                        onClick={()=>{
                            setLike(!like)
                        }}>
                        {!like && <Like/>}
                        {like && <Like_fill/>}
                    </button>
                </div>


                    <p className={" text-black"}>
                        لایک شده توسط استاد
                    </p>

            </div>

        </div>
    </div>

    </div>

    )
}

export default BookletInformation;