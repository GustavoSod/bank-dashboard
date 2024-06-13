'use client'
import { useState } from 'react';

interface QuestionProps {
  question: string;
  answer: string;
}

const Questions: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const questions: QuestionProps[] = [
    { question: "Como a YourMoney funciona?", answer: "Facilitamos transações financeiras globais de maneira rápida e segura, conectando clientes a mercados financeiros em todo o mundo através de nossa plataforma digital." },
    { question: "Quais são nossas taxas?", answer: "Nossas taxas são competitivas e transparentes. Cobramos taxas mínimas por transações internacionais e oferecemos opções flexíveis para diversos tipos de serviços financeiros." },
    { question: "Quais Tipos de contas temos?", answer: "Oferecemos uma ampla gama de serviços, incluindo câmbio de moedas, transferências internacionais, investimentos em mercados globais e soluções financeiras corporativas personalizadas." },
    { question: "YourMoney é seguro??", answer: "Sim, priorizamos a segurança dos dados e das transações dos nossos clientes. Utilizamos tecnologia avançada de criptografia e seguimos rigorosos padrões de conformidade regulatória.." },
    { question: "É aberto para qualquer tipo de transação", answer: "Nossos serviços são abertos para uma ampla gama de transações, incluindo remessas familiares, pagamentos corporativos, investimentos diversificados e transações de comércio internacional." }
  ];

  const toggleAnswer = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="flex items-center w-full justify-center">
      <div className="w-4/5 rounded-lg items-center justify-center sm:mt-40 mt-24">
        <div className="bg-green-500 rounded-lg text-center p-4">
          <h1 className="lg:text-5xl sm:text-4xl text-3xl font-semibold">Questões</h1>
        </div>
        <style jsx>{`
          .answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-out, padding-left 0.5s ease-out, padding-bottom 0.5s ease-out;
            padding-bottom: 0;
          }

          .answer.open {
            max-height: 1000px;
            padding-bottom: 1rem;
          }
        `}</style>
        <div className="">
          {questions.map((q, index) => (
            <div key={index} className='border-b-2 border-slate-500 p-3'>
              <h2 className="text-xl p-4 cursor-pointer" onClick={() => toggleAnswer(index)}>{q.question}</h2>
              <p className={`answer ${expandedIndex === index ? 'open text-lg pl-3 transition-all' : 'text-lg pl-3'}`}>{q.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Questions;