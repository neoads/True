import Header from './components/Header';
import conspiraPizzaImage from './assets/conspira_pizza.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <section className="my-8 text-center">
          <img src={conspiraPizzaImage} alt="True Ads Marketing Digital" className="mx-auto mb-4 w-48 h-48" />
          <h1 className="text-4xl font-bold">True Ads Marketing Digital</h1>
          <h2 className="text-2xl mb-8">53.261.684/0001-41</h2>
          <h2 className="text-3xl font-bold mb-4">NOSSA MISSÃO:</h2>
          <p className="text-lg italic max-w-3xl mx-auto">
            "Oferecer soluções de marketing digital inovadoras e eficazes, transformando a presença online dos nossos clientes em resultados concretos. Com uma equipe apaixonada e dedicada, buscamos superar as expectativas através de um atendimento personalizado, estratégias criativas e análise de dados, sempre com transparência e comprometimento. Nossa missão é ajudar a construir marcas de sucesso que reflitam crescimento, autoridade e satisfação, tornando cada projeto uma parceria de longo prazo."
          </p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">CONTATO:</h2>
          <p className="text-lg">Telefone: (31) 973198749</p>
          <p className="text-lg">E-mail: contate@corssar.com</p>
          <p className="text-lg"><a href="https://www.instagram.com/conspirapizza/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">INSTAGRAM</a></p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">QUEM SOMOS?</h2>
          <p className="text-lg max-w-3xl mx-auto text-justify">
            A <strong className="font-bold">True Ads Marketing Digital LTDA</strong>, registrada sob o CNPJ <strong className="font-bold">53.261.684/0001-41</strong>, foi fundada em <strong className="font-bold">19 de dezembro de 2023</strong>, na cidade de <strong className="font-bold">Florianópolis, Santa Catarina</strong>. Como uma empresa inovadora no mercado, atuamos no segmento de <strong className="font-bold">marketing digital</strong>, oferecendo soluções que unem <strong className="font-bold">estratégia, criatividade e resultados</strong> para impulsionar o crescimento de nossos clientes.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Nossa atividade principal, conforme a Receita Federal, é <strong className="font-bold">Atividades de publicidade (CNAE 73.11-4-00)</strong>, abrangendo desde a criação de campanhas digitais até a gestão de redes sociais e otimização para mecanismos de busca (SEO). Com <strong class="font-bold">1 ano, 9 meses e 11 dias de experiência</strong>, nos destacamos pela <strong class="font-bold">inovação, resultados comprovados e atendimento especializado</strong>, sempre buscando atender às necessidades e expectativas dos nossos clientes.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Localizada na <strong className="font-bold">Servidao Quadros, 360, Casa A, Rio Tavares, Florianópolis-SC (CEP 88048-450)</strong>, nossa agência é referência no bairro e região, proporcionando soluções de marketing eficazes e personalizadas. Valorizamos a <strong className="font-bold">transparência, a criatividade e a satisfação do cliente</strong>, garantindo que cada projeto seja executado com excelência.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Na <strong className="font-bold">True Ads Marketing Digital</strong>, acreditamos que <strong className="font-bold">o marketing digital reflete a paixão de quem o faz</strong>. Por isso, nosso compromisso vai além da execução de campanhas: queremos ajudar você a construir <strong className="font-bold">marcas fortes, com presença digital impactante e cheias de estilo</strong>, seja para sua empresa ou projeto pessoal.
          </p>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Serviços Disponíveis:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Gestão de Tráfego Pago</strong> – Campanhas no Google Ads e Meta Ads para resultados rápidos.</li>
            <li><strong className="font-bold">Gestão de Redes Sociais</strong> – Conteúdo relevante e engajamento para sua marca.</li>
            <li><strong className="font-bold">Criação de Sites e Landing Pages</strong> – Presença online profissional e otimizada.</li>
            <li><strong className="font-bold">Consultoria de Marketing Digital</strong> – Estratégias personalizadas para o seu negócio.</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Informações da Empresa:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong class="font-bold">Razão Social:</strong> True Ads Marketing Digital LTDA</li>
            <li><strong class="font-bold">CNPJ:</strong> 53.261.684/0001-41</li>
            <li><strong class="font-bold">Data de Abertura:</strong> 19/12/2023</li>
            <li><strong class="font-bold">Porte:</strong> Micro Empresa</li>
            <li><strong className="font-bold">Natureza Jurídica:</strong> Sociedade Empresária Limitada</li>
            <li><strong className="font-bold">Opção pelo MEI:</strong> Não</li>
            <li><strong className="font-bold">Opção pelo Simples:</strong> Sim</li>
            <li><strong class="font-bold">Data opção Simples:</strong> 19/12/2023</li>
            <li><strong className="font-bold">Situação Cadastral:</strong> Ativa</li>
            <li><strong class="font-bold">Data Situação Cadastral:</strong> 19/12/2023</li>
            <li><strong className="font-bold">Tipo:</strong> Matriz</li>
            <li><strong class="font-bold">Capital Social:</strong> R$ 1.000,00</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Localização e Contato:</h3>
          <p className="text-lg">📍 <strong className="font-bold">Endereço:</strong> Servidao Quadros, 360, Casa A, Rio Tavares, Florianópolis-SC, <strong className="font-bold">CEP 88048-450</strong></p>
          <p className="text-lg">📞 <strong className="font-bold">Telefone/WhatsApp:</strong> <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">(31) 973198749</a></p>
          <p className="text-lg mt-4">Na <strong class="font-bold">True Ads Marketing Digital</strong>, estamos prontos para ajudar você a <strong class="font-bold">transformar sua presença digital</strong>. Entre em contato e descubra como <strong class="font-bold">estratégias de marketing eficazes podem impulsionar seu negócio!</strong> 🚀</p>
        </section>

        <section className="my-8 text-center">
          <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><h2 className="text-3xl font-bold mb-4">Fale comigo:</h2></a>
          {/* Formulário de contato ou link para WhatsApp */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-8 mt-8">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-xl font-bold mb-4">RODAPÉ & POLÍTICA DE PRIVACIDADE</h3>
          <h4 class="text-lg font-bold mb-2">True Ads Marketing Digital LTDA</h4>
          <p className="text-sm"><strong>CNPJ:</strong> 53.261.684/0001-41</p>
          <p className="text-sm"><strong>Razão Social:</strong> TRUE ADS MARKETING DIGITAL LTDA</p>
          <p className="text-sm"><strong>Data de Abertura:</strong> 19/12/2023</p>
          <p className="text-sm"><strong>Porte:</strong> Micro Empresa</p>
          <p className="text-sm"><strong>Natureza Jurídica:</strong> Sociedade Empresária Limitada</p>
          <p className="text-sm"><strong>Situação Cadastral:</strong> Ativa</p>
          <p className="text-sm"><strong>Tipo:</strong> Matriz</p>
          <p className="text-sm"><strong>Capital Social:</strong> R$ 1.000,00</p>
          <p className="text-sm"><strong>Endereço:</strong> Servidao Quadros, 360, Casa A, Rio Tavares, Florianópolis-SC</p>
          <p className="text-sm"><strong>CEP:</strong> 88048-450</p>
          <p className="text-sm"><strong>E-mail:</strong> contate@corssar.com</p>
          <p className="text-sm"><strong>Telefone/WhatsApp:</strong> (31) 973198749</p>
          <p className="text-sm italic mt-4">Transformando a presença digital de empresas desde 2023</p>

          <h4 className="text-lg font-bold mt-8 mb-2">POLÍTICA DE PRIVACIDADE</h4>
          <p className="text-sm"><strong>True Ads Marketing Digital LTDA</strong></p>
          <p className="text-sm"><strong>CNPJ:</strong> 53.261.684/0001-41</p>
          <p className="text-sm"><strong>Endereço:</strong> Servidao Quadros, 360, Casa A, Rio Tavares, Florianópolis-SC, CEP 88048-450</p>

          <h5 className="text-md font-bold mt-4 mb-2">1. Finalidade</h5>
          <p className="text-sm">Esta política descreve como coletamos, utilizamos e protegemos os dados pessoais dos clientes que interagem conosco por meio de WhatsApp, e-mail, telefone, redes sociais ou durante a contratação de nossos serviços de marketing.</p>

          <h5 className="text-md font-bold mt-4 mb-2">2. Dados Coletados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Informações fornecidas voluntariamente:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Nome, telefone, e-mail, endereço (para orçamentos ou entregas).</li>
                <li>Preferências e necessidades de marketing.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Dados automáticos:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Registro de interações para atendimento e melhoria de serviços.</li>
                <li>Dados de navegação (se aplicável a site ou redes sociais).</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">3. Uso de WhatsApp, Telefone e E-mail</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Finalidades:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Atendimento ao cliente, orçamentos, agendamento de reuniões e confirmação de serviços.</li>
                <li>Não enviamos mensagens promocionais não solicitadas sem consentimento.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Armazenamento:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Dados de contato e interações são armazenados por <strong className="font-bold">12 meses</strong>, exceto quando exigido por lei.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">4. Compartilhamento de Dados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Não comercializamos ou compartilhamos dados com terceiros para fins publicitários.</li>
            <li><strong className="font-bold">Exceções:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Parceiros de logística (apenas informações necessárias para entrega).</li>
                <li>Autoridades legais, mediante requisição formal.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">5. Direitos do Usuário (LGPD)</h5>
          <p className="text-sm">Você pode solicitar:</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Acesso ou correção dos seus dados.</li>
            <li>Exclusão (exceto quando a lei exigir retenção).</li>
            <li>Revogação de consentimento (via e-mail ou telefone).</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">6. Segurança</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Dados protegidos com acesso restrito à equipe autorizada.</li>
            <li>Não solicitamos informações sensíveis (como CPF ou cartões de crédito) por mensagens não criptografadas.</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">7. Alterações nesta Política</h5>
          <p className="text-sm">Atualizações serão comunicadas em nossos canais oficiais.</p>

          <h5 className="text-md font-bold mt-4 mb-2">8. Contato</h5>
          <p className="text-sm">Dúvidas ou solicitações sobre seus dados?</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">WhatsApp:</strong> (31) 973198749</li>
            <li><strong className="font-bold">E-mail:</strong> contate@corssar.com</li>
          </ul>
          <p className="text-sm mt-4">© 2025 True Ads Marketing Digital. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

