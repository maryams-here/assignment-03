import Image from "next/image";
interface CardProp {
    title: string,
    image: string
}
export default function Card(prop: CardProp) {
    return(
        
       
        <div className="bg-black rounded-xl transition-transform hover:scale-105 text-center flex justify-center items-center h-56 w-full max-w-md ">
     
     <div>
            <Image src={prop.image} alt={prop.title} width={190} height={190} />
            </div>

        <h1 className="text-white text-4">{prop.title}</h1>
    </div>
    )
    
}