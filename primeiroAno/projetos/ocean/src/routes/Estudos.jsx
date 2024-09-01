import { Card, CardHeader } from "@nextui-org/react";
import { Helmet } from "react-helmet";

export default function Estudos() {
  return (
    <>
      <Helmet>
        <title>OCEAN - Problema</title>
        <meta name="description" content="Referências referral" />
      </Helmet>
      <Card radius="none">
        <CardHeader className="p-0 hidden md:contents">
          <div className="relative  w-full md:h-[45vh] lg:h-[85vh]">
            <div className="absolute inset-0 bg-image4 bg-cover backdrop-blur-2xl"></div>
            <div className="relative z-1 flex items-center justify-center h-full">
              <h1 className="titulo">Estudos</h1>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="container pt-10">
        <h2 className="text-5xl pt-3 mb-3 uppercase">Referências</h2>
        <br />
        <ul className="grid gap-5">
          <li>
            <cite>
              <a href="https://www.iat.pr.gov.br/Pagina/Glossario-Geologico">
                Glossário Geologico GOV PR
              </a>
            </cite>
          </li>
          <li>
            <cite>
              <a href="https://gaigerco.furg.br/images/Arquivos-PDF/Mar_de_Lixo_3105.pdf">
                MAR DE LIXO, Universidade Federal do Rio Grande, FURG, 2019
              </a>
            </cite>
          </li>
          <li>
            <cite>
              Candido, Juliana Loureiro Resíduos plásticos nos oceanos: origem,
              impacto e combate / Juliana Loureiro Candido; orientadora Talita
              Martins Lacerda. - Lorena, 2019. 35 p.
            </cite>
          </li>
          <li>
            <cite>
              <a href="https://www.nationalgeographicbrasil.com/meio-ambiente/2022/04/a-rota-do-plastico-do-lixo-aos-ecossistemas-marinhos">
                {" "}
                REDAÇÃO NATIONAL GEOGRAPHIC, A rota do plástico: do lixo aos
                ecossistemas marinhos, 20 DE ABR. DE 2022
              </a>
            </cite>
          </li>
          <li>
            <cite>
              <a href="https://www.aqqua.unb.br/images/Artigos/Tematicos/difusa.pdf">
                Sodré, Fernando Fabriz Fontes Difusas de Poluição da Água:
                Características e métodos de controle, Instituto de Química,
                Universidade de Brasília, 2012{" "}
              </a>
            </cite>
          </li>
          <li>
            <cite>
              <a href="https://www.marinha.mil.br/combate-ao-lixo-no-mar"></a>
              Combate ao Lixo no Mar, Marinha do Brasil
            </cite>
          </li>
          <li>
            <cite>
              Gretchen M. Spencer. 2020. Environmental Variability in West Lake
              Mangroves: A Climatology Report. Master's thesis. Nova
              Southeastern University. Retrieved from NSUWorks.{" "}
              <a href="https://nsuworks.nova.edu/hcas_etd_all/117">
                https://nsuworks.nova.edu/hcas_etd_all/117
              </a>
              .
            </cite>
          </li>
          <li>
            <cite>
              AVIO, C. G.; GORBI, S.; REGOLI, F. Plastics and microplastics in
              the oceans: from emerging pollutants to emerged threat. Marine
              Environmental Research, v. 128, p. 2-11, 2017.
            </cite>
          </li>
          <li>
            <cite>
              <a href="http://www12.senado.leg.br/ril/edicoes/54/213/ril_v54_n213_p135">
                BARRIENTOS-PARRA, Jorge; SILVA, Ana Carolina Carlucci da. Os
                impactos dos avanços tecnológicos, a poluição marinha por
                petróleo e as repercurssões no direito do mar. Revista de
                informação legislativa: RIL, v. 54, n. 213, p. 135-157,
                jan./mar. 2017.
              </a>
            </cite>
          </li>
        </ul>
      </div>
      <br />
      <br />
    </>
  );
}
