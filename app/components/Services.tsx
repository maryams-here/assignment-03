import Card from "./card"

export default function Services(){
    const titles=[
        {title:"Organics Product", image:"/organicprod.jpg"},
        {title:"Healthy Diet",image:"/healthydiet.jpg"},
        {title:"Water Intake",image:"/waterintake.jpg"},
        {title:"Exercise Daily",image:"/exercise.jpg"},
    ]
return (
    <div className="bg-gold-600 p-6">
    <div className="grid grid-cols-4 gap-6">
        {titles.map((title,index)=>
        
            <Card key={index} {...title}/>
        
        
        )}
    </div>
    </div>
)
}