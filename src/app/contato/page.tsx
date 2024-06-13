import InputText from "@/components/inputText";
import SocialMedia from "@/components/socialMedia";
export default function SingIn(){
    return(
        <div className="flex min-h-screen flex-col items-center -mb-24"> 
            <div className="w-[90%] flex flex-col justify-around items-center mb-36">
                <div className="items-start mb-16 mt-20 lg:w-[100%] sm:w-[90%] w-[85%]">
                    <h1 className=" lg:text-7xl sm:text-5xl text-5xl">Quer <span className="text-green-500">entrar em contato?</span></h1>
                    <p className=" text-gray-400  mt-6">Gostariamos muito de conversar com você. Veja como entrar em contato.</p>
                </div>  
                <div className="flex w-full justify-between items-center lg:flex-row md:flex-col sm:flex-col flex-col">
                    <SocialMedia title={'WhatsApp'} style={'lg:w-[45%] w-[90%] bg-green-500 h-64 rounded-lg flex flex-col justify-evenly sm:items-start items-center sm:pl-10 pl-0 lg:mb-0 sm:mb-10 mb-10'} description="Tire suas duvidas conosco pelo WhatsApp"/>
                    <SocialMedia title={'Instagram'} style={'lg:w-[45%] w-[90%] bg-pink-500 h-64 rounded-lg flex flex-col justify-evenly sm:items-start items-center sm:pl-10 pl-0 lg:mb-0 sm:mb-0 mb-0'} description="Tire suas duvidas conosco pelo Instagram"/>
                </div> 
            </div>
            <div className="flex flex-col w-full bg-slate-800 h-[60vh] justify-center items-center">
                <h1 className="text-4xl font-medium mb-10">Tire suas duvidas</h1>
                <InputText type={'text'} name={'Email'} placeholder={'Email'} style={'lg:w-[50%] sm:w-[80%] w-[90%] rounded mb-8 p-3'}/>
                <InputText type={'text'} name={'Assunto'} placeholder={'Assunto'} style={'lg:w-[50%] sm:w-[80%] w-[90%] rounded p-3 mb-8'}/>
                <textarea  name={'Descrição'} placeholder={'Tire sua duvida aqui'} className="lg:w-[50%] sm:w-[80%] w-[90%] rounded p-3"/>
                <input type="submit" value="Enviar" className="bg-green-500 p-3 rounded-lg mt-8 text-xl" />
            </div>
        </div>
    );
}