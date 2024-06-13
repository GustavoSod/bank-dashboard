import Presentation from "@/components/presentation";
import Questions from "@/components/questions";
import Steps from "@/components/steps";
import CompanyIcons from "@/components/companyIcons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Presentation/>
      <CompanyIcons/>
      <Steps title ={"Receber sem taxa"} subTitle={"De outro pais"}/>
      <Steps title ={"Enviar para outro"} subTitle={"Pais sem taxa"}/>
      <Steps title ={"Conta global com"} subTitle={"Melhor taxas"}/>
      <Questions/>
    </main>
  );
}