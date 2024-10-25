export default function HeroSection(){
    return(
        <div className="min-h-screen relative">
    <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("/green.jpg")' }} />
    <div className="relative text-black flex items-center  justify-center flex-col space-y-7 pt-40 ">
        <h1 className="font-bold text-4xl underline underline-offset-2 ">HEALTH & WELLNESS SERVICES</h1>
        <p className="text-lg font-mono w-full max-w-3xl text-center">We Care For Your Health, that is why we are proviing You the best diet plans ever that boost your hygeine and health . so stay tune for the offer and grab it asap .</p>
        <button className="bg-green-800 p-2 px-9 hover:bg-purple-400 rounded-full text-semibold text-xl">Get Offer</button>
    </div>
</div>

    )
}