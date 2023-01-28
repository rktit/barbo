import React from 'react';

import {Modal} from 'react-bootstrap'

import {useDispatch, useSelector} from "react-redux";
import * as Actions from 'store/actions';

import {Content, Title} from './style'
import * as Icon from "react-bootstrap-icons";

export default function ModalPolitica() {
		
		const _modal = useSelector(({modal}) => modal.politica);
		const dispatch = useDispatch()
		
		return (
				<>
						<Modal
								show={_modal}
								size="lg"
								onHide={() => dispatch(Actions.close_modal('politica'))}
								backdrop="static"
								keyboard={true}
								centered
						>
								<Modal.Header className="topo-modal-politica">
										<Modal.Title className='row col-12 justify-content-center'>
												<Title className='row col-12 p-0 flex justify-content-between'>
														<div className='title'>POLÍTICA DE PRIVACIDADE BARBO EMPREENDIMENTOS</div>
														<div><a href={"#"} onClick={() => dispatch(Actions.close_modal('politica'))}
														        className='text-center'><Icon.XCircle color='#000000' size={18}/></a></div>
												</Title>
										</Modal.Title>
								</Modal.Header>
								<Modal.Body>
										<Content className='row col-12 text-left'>
												<strong>INTRODUÇÃO</strong>
												Nós, da Barbo Empreendimentos temos o prazer de oferecer para você, a melhor experiência de
												consumo possível. Para que isso aconteça, quando você acessa nosso site, nós coletamos os dados
												pessoais que você compartilha conosco para tornar nossos serviços de vendas ainda melhores.
												<br/><br/>
												O objetivo desta Política de Privacidade é fornecer a você uma visão clara de como usamos os
												dados pessoais que você nos fornece quando visita nosso ambiente, sejam ele digital ou físico. A
												nossa dedicação principal é protegê-los, proteger sua privacidade, seus direitos e as opções que
												você tem para controlar seus dados pessoais e, até mesmo, os terceiros com quem compartilhamos
												eles.
												<br/><br/>
												<strong>O QUE SÃO, COMO E QUAIS DADOS PESSOAIS COLETAMOS DE VOCÊ:</strong>
												“Dados Pessoais” são quaisquer informações que se refiram a você e que lhe identifiquem
												pessoalmente, seja individualmente ou em conjunto com quaisquer outras informações que nos sejam
												disponibilizadas.<br/>
												A Barbo Empreendimentos coletará vários tipos e categorias de dados pessoais, conforme aplicável:
												<br/><br/>
												1 – NA ASSINATURA: Caso você se registre em uma de nossas contas, a qual lhe permite usar as
												mesmas informações de registro em qualquer lugar no mundo, coletamos seus dados para efetivar
												seu acesso e isso pode incluir seu nome, sobrenome, endereço de e-mail.
												<br/><br/>
												2 - USO DE NOSSOS PRODUTOS E SERVIÇOS: ao usar nossos produtos e serviços, solicitaremos
												informações pessoais (mas, claro, no momento da coleta, explicaremos quais informações serão
												necessárias e quais são opcionais de preenchimento), tais como:
												<br/><br/>
												a. sua data de nascimento e/ou a confirmação de que você tem mais de 18 anos;<br/>
												b. seu endereço de e-mail, ao se inscrever em uma de nossas promoções ou newsletters;
												<br/><br/>
												4 - DADOS PESSOAIS QUE COLETAMOS AUTOMATICAMENTE: também podemos coletar dados pessoais a seu
												respeito, quando você interage com nosso site, e sobre como você os usa, a saber:
												<br/><br/>
												- Sites: coletaremos informações sobre visita e uso dos sites. Uma visita a um de nossos sites
												resulta no envio de dados de seu navegador para nossos servidores. Coletaremos dados pessoais da
												seguinte forma: endereço de IP; data e hora da visita e tempo de permanência em nosso site; URL
												de referência (site terceiro do qual você foi direcionado para o nosso site); páginas e produtos
												visitados em nosso site; e informações sobre o dispositivo e o navegador (tais como tipo e
												versão do navegador e sistema operacional).
												<br/><br/>
												- Cookies e dispositivos similares: nós e nossos parceiros usamos várias tecnologias para
												coletar e armazenar informações, inclusive dados pessoais, quando você estiver visitando nossos
												sites ou usando nossos aplicativos, incluindo o envio de um ou mais cookies ou outros
												dispositivos similares para seu dispositivo.
												<br/><br/>
												5 - FONTES DE INFORMAÇÕES: a maioria das informações que coletarmos a seu respeito estará
												relacionada aos dados pessoais que você forneceu voluntariamente, por meio de sites, WhatsApp,
												ou seja, por meio de todas as interações que você fizer com os sistemas disponibilizados pela
												Barbo Empreendimentos.
												<br/><br/>
												<strong>COMO USAMOS SEUS DADOS PESSOAIS:</strong>
												Os dados pessoais que coletarmos, a partir das fontes listadas acima, serão usados no formato em
												que forem recebidos ou, quando apropriado, serão combinados com as informações pessoais que
												obtivermos de outras fontes internas ou externas. Usamos e analisamos essas informações pessoais
												para outras finalidades, as quais detalhamos abaixo:
												<br/><br/>
												No Atendimento ao Consumidor: se contatar nossos Canais de Atendimento (ou vice-versa), usaremos
												dados pessoais para processar seu pedido e oferecer o melhor serviço/solução possível.
												<br/><br/>
												No desenvolvimento de produtos, serviços, promoções, sorteios, ofertas e eventos promovidos pela
												Barbo Empreendimentos: usaremos seus dados pessoais, se assim permitido, para oferecer produtos e
												serviços, tais como promoções;
												<br/><br/>
												Para ações de marketing: quando você se inscrever para receber as “newsletters” Barbo Empreendimentos,
												criar uma conta, solicitar ou fornecer feedback sobre um produto ou serviço online ou usar nosso
												site, usaremos seus dados pessoais para criar um perfil com base nas informações que tivermos a
												seu respeito. Criamos seu perfil de acordo com suas preferências para oferecer a melhor
												experiência personalizada e enviar mensagens de marketing e newsletters personalizadas, bem como
												para pesquisa de opinião. Para atingir as referidas finalidades, a Barbo Empreendimentos utiliza seus
												dados pessoais através da maneira como você interage com nossa marca por meio de todos os
												diferentes canais descritos acima e as informações que coletamos a esse respeito, por meio de
												cada um desses canais, dizem muito sobre seus interesses e preferências. Essa percepção
												permite-nos oferecer a melhor experiência possível. Em particular, poderemos combinar as
												informações que coletarmos com as informações coletadas por terceiros. Caso tenha permitido
												enviar comunicações de marketing, usaremos as informações que você forneceu, ao interagir
												conosco, para enviar mensagens com esse cunho, mas, de maneira personalizada, sobre os produtos
												ou serviços, descontos e promoções comerciais realizadas por nós. Em algumas circunstâncias,
												também combinaremos suas informações pessoais com aquelas de outros indivíduos para criar
												relatórios abrangentes sobre como os clientes usam nossos produtos e serviços e experimentam
												nossa marca, mas para questões estatísticas nós utilizaremos seus dados pessoais anonimamente.
												Além disso, enviaremos comunicações de marketing diretas por meio do canal que você escolher e
												permitir, tais como e-mail, telefone ou redes sociais. Como mencionamos, as mensagens que
												enviarmos serão personalizadas e customizadas de acordo com suas preferências e interesses
												individuais. Usamos dados analíticos para gerar essas mensagens personalizadas. Essas mensagens
												de marketing diretas poderão conter informações sobre os produtos e serviços ou promoções e
												notícias. Também usaremos, em determinadas circunstâncias, os canais para pesquisa de opinião
												(para perguntar se você gostaria de participar de uma pesquisa), bem como para saber mais sobre
												sua experiência.
												<br/><br/>
												Redirecionamento: nosso site usa tecnologias de redirecionamento. Isso nos permite apresentar a
												nossos visitantes, que já demonstraram interesse por nossa loja e por nossos produtos e/ou
												serviços, nossos anúncios em outros sites. Acreditamos que a apresentação de anúncios
												personalizados, com base em interesses, seja mais interessante e relevante para nossos clientes
												do que a apresentação de anúncios que não tenham conexão pessoal. As tecnologias de
												redirecionamento analisam as informações que coletamos sobre suas interações, conforme descrito
												acima, a respeito das ações de marketing, inclusive seus cookies, e apresentam anúncios com base
												em seu comportamento prévio de navegação na web.
												<br/><br/>
												Anúncios: também operamos com empresas parceiras, que usam tecnologias de rastreamento para
												veicular anúncios em nosso nome pela Internet. Essas empresas talvez coletem dados pessoais
												sobre suas visitas a nossos sites ou aplicativos e sobre sua interação com nossas comunicações,
												inclusive publicitárias. Informações sobre quais dados essas empresas coletam e como tratam seus
												dados pessoais, deverão ser consultadas nas Políticas de Privacidade e Tratamento de Dados das
												próprias empresas. Caberá a você ler tais Políticas, sendo de sua responsabilidade aceitá-las ou
												rejeitá-las. A Barbo Empreendimentos não é responsável pelas Políticas de Privacidade e Tratamento de
												Dados de terceiros e nem pelo conteúdo de quaisquer sites, conteúdo ou serviços ligados a
												ambientes que são de terceiros.
												<br/><br/>
												Enriquecimento de nossos dados: quando obtivermos suas informações de diversas fontes,
												combinamos essas informações, em certas circunstâncias, para enriquecer nosso entendimento de
												suas preferências com relação a nossos produtos e serviços, com a finalidade de melhorar sua
												experiência, enviando a você marketing personalizado ou preparar campanhas de marketing mais
												eficazes.
												<br/><br/>
												Aperfeiçoamento de nossos produtos e serviços: usamos os dados pessoais que detivermos sobre
												você, (bem como as informações na forma de pseudônimos ou anônimas geradas por suas informações
												pessoais) para executar nossa análise e pesquisa, incluindo: ciência ou análise de dados, em que
												combinamos informações (tais como informações pessoais e/ou sensíveis obtidas pelo uso de um
												aplicativo de Training ou de seu histórico de navegação, por exemplo) que mantemos em grande
												escala, com o objetivo de aprender mais sobre nossos clientes e suas preferências, identificar
												seus padrões e tendências, aprimorar a experiência de usuário em nossos sites, fornecer
												informações, conteúdo e ofertas sob medida para as necessidades de maneira individualizada, fins
												genéricos de pesquisa e estatística ou, até mesmo, com fins de relatório agregado. Podendo,
												ainda, nos ajudar a desenvolver novos produtos e serviços, monitorar o desempenho deles e/ou
												aprimorar nossa tecnologia.
												<br/><br/>
												Sites: os dados pessoais coletados via site serão usados para permitir-nos avaliar
												comportamentos de navegação em nossos sites, entender onde é possível melhorarmos, otimizar
												nossos produtos e serviços, bem como para personalizar e aprimorar sua experiência em nossos
												sites e com nossos aplicativos.
												<br/><br/>
												Análise de desempenho: vamos usar seus dados pessoais (inclusive via anonimato e agregação com
												as informações pessoais de outros clientes) para fins de análise de vendas, cadeia de
												suprimentos e financeira, de modo a determinar como a Barbo Empreendimentos está desempenhando, onde é
												possível introduzir melhorias.
												<br/><br/>
												Solicitaremos sua permissão se quisermos usar seus dados pessoais para fins diferentes dos
												mencionados nesta Política de Privacidade e do modo exigido pela Lei Geral de Proteção de Dados
												Pessoais (LGPD).
												<br/><br/>
												<strong>COMO COMPARTILHAMOS SEUS DADOS PESSOAIS:</strong>
												Seus dados pessoais são tratados com cuidado e como confidenciais pela Barbo Empreendimentos, sendo
												compartilhados com terceiros apenas quando necessário e conforme indicado abaixo:
												<br/><br/>
												<strong>COM PRESTADORES DE SERVIÇOS:</strong>
												Podemos compartilhar os dados pessoais limitados que você fornece ou forneceu por meio dos
												canais de venda (seu nome, e-mail, senha e data de nascimento) com nossos prestadores de
												serviços, para fins de identificação e autenticação, de modo que você possa acessar sua conta
												com rapidez, facilidade e na velocidade que você espera de nós em qualquer lugar do mundo.
												<br/><br/>
												Vamos também compartilhar seus dados pessoais, conforme necessário, e somente para os fins
												descritos acima, com terceiros que processam seus dados pessoais em nosso nome, tais como
												terceiros que administram, como: prestadores de serviços de armazenamento em nuvem, entrega de
												produtos, operadores para processar seus pagamentos e gestão de fraudes, agências de
												classificação de crédito e plataformas analíticas. Exigimos que esses prestadores de serviços e
												outros terceiros cumpram regras rígidas ao processar seus dados pessoais, incluindo o uso
												exclusivo destes dados de acordo com as instruções da Barbo Empreendimentos e da Lei Geral de Proteção de
												Dados Pessoais (LGPD), bem como outras legislações, normas ou regulamentos aplicáveis sobre a
												matéria e ao caso concreto.
												<br/><br/>
												<strong>COM REDES SOCIAIS:</strong>
												Nosso site em certas circunstâncias, fornecerão a você plug-ins para diversas redes sociais. Se
												você decidir interagir com uma rede social, ao registrar sua conta, sua atividade em nosso site
												ou via aplicativos será disponibilizada pela rede social. Se você tiver logado em alguma dessas
												redes sociais durante sua visita a um de nossos sites ou aplicativos ou estiver interagindo com
												algum dos plug-ins sociais, a rede social pode adicionar essa informação a seu perfil nessa
												rede, com base em suas configurações de privacidade. Se quiser impedir esse tipo de
												transferência de dados, saia de sua conta de rede social antes de entrar em nosso site, ou
												altere as configurações do aplicativo quando possível. Leia as políticas de privacidade das
												redes sociais para obter informações detalhadas sobre a coleta e transferência de dados
												pessoais, seus direitos e sobre como manter configurações de privacidade adequadas às suas
												necessidades.
												<br/><br/>
												<strong>COM AS AUTORIDADES DE SEGURANÇA E REGULATÓRIAS:</strong>
												A Barbo Empreendimentos divulgará seus dados pessoais quando exigido por autoridade, lei ou processo
												judicial, para a administração da justiça, para proteger seus interesses vitais, para
												investigações das autoridades de segurança ou regulatórias, para proteger os bens e direitos da
												empresa, proteger a segurança dos usuários do site ou no caso de mandado judicial ou ordem de
												órgão de segurança.
												<br/><br/>
												
												<strong>COMO PROTEGEMOS SEUS DADOS PESSOAIS:</strong>
												Estamos comprometidos com a proteção dos dados pessoais que você nos confia e implementamos
												medidas de segurança nos mais níveis técnicos e organizacionais para protegê-los contra o
												processamento não autorizado ou ilegal, contra a venda, perda, destruição ou danos
												acidentais.<br/>
												A Barbo Empreendimentos garante a segurança da informação em seus sistemas por meio de protocolos,
												controles, políticas internas e orientações para manter as medidas de segurança.<br/>
												Internamente, os dados pessoais coletados são acessados somente por profissionais devidamente
												autorizados, respeitando os princípios de proporcionalidade, necessidade e relevância para os
												objetivos do negócio da Barbo Empreendimentos, além do compromisso de confidencialidade e preservação da
												sua privacidade nos termos desta Política.
												<br/><br/>
												<strong>COMO ARMAZENAMOS SEUS DADOS PESSOAIS:</strong>
												Vamos manter seus dados pessoais, em ambiente seguro e controlado, por um prazo mínimo de:
												<br/><br/>
												1. Dados cadastrais: 5 (cinco) anos após o término da relação existente entre você e a Barbo Empreendimentos, de acordo com os artigos 12 e 34 do Código de Defesa do Consumidor;<br/>
												2. Dados de identificação digital: 6 (seis) meses, conforme o artigo 15 do Marco Civil da
												Internet;<br/>
												3. Outros dados: enquanto durar a relação existente entre você e a Barbo Empreendimentos e não houver
												pedido de apagamento ou revogação de consentimento, conforme o artigo 9º, inciso II, da Lei
												Geral de Proteção de Dados Pessoais (LGPD).<br/>
												Os prazos poderão ser maiores para fins de auditoria, segurança ou controle de fraudes, proteção
												de crédito e preservação de direitos, podendo a Barbo Empreendimentos permanecer com seus dados pessoais.
												<br/><br/>
												
												<strong>DADOS PESSOAIS DE CRIANÇAS:</strong><br/>
												Como regra geral, não coletamos intencionalmente dados pessoais de crianças menores de 13 anos.
												Se vier ao nosso conhecimento que coletamos dados pessoais de crianças com idade inferior a 13
												anos, tomaremos medidas para excluir essas informações tão logo quanto possível, salvo se a lei
												nos exigir que as mantenhamos.<br/>
												Se soubermos que a criança tem mais de 13 anos, mas é considerada menor, conforme o Estatuto da
												Criança e do Adolescente, vamos obter a permissão dos pais ou responsáveis antes de usar esses
												dados pessoais.<br/>
												É responsabilidade dos pais ou representantes legais supervisionar as atividades online de seus
												filhos, crianças ou adolescentes.
												<br/><br/>
												<strong>LINKS PARA OUTROS SITES E SERVIÇOS:</strong><br/>
												Nossos sites podem conter links para sites de terceiros e alguns de nossos serviços
												proporcionarão a você acesso a sites e serviços de terceiros (tais como redes sociais).<br/>
												Não temos controle sobre como esses terceiros processam seus dados pessoais. Não examinamos e
												não somos responsáveis por sites e serviços de terceiros ou por suas práticas de privacidade.
												Caberá a você ler as Políticas de Privacidade e Tratamento de Dados de tais portais ou
												plataformas fora do nosso ambiente, sendo de sua responsabilidade aceitá-las ou rejeitá-las.
												<br/><br/>
												<strong>SEUS DIREITOS EM RELAÇÃO AOS SEUS DADOS PESSOAIS:</strong><br/>
												Concorrência leal e transparência são importantes para nós. Somos transparentes quanto aos dados
												pessoais que coletamos e implementamos mecanismos relacionados a eles.
												<br/><br/>
												Acesso e correção de dados pessoais:<br/>
												Caso você tenha encomendado produtos ou serviços ou se registrado em uma de nossas contas, você
												poderá acessar um volume de seus dados pessoais por meio de nossos sites. Eles apresentam, de
												forma geral, a opção de adicionar, atualizar ou remover algumas das informações que tivermos
												sobre você.<br/>
												Se qualquer dado pessoal que tenhamos a seu respeito não estiver acessível por meio do site, é
												possível nos enviar uma solicitação para acessar estas informações, sem qualquer custo,
												utilizando as informações de contato apresentadas ao final desta Política de Privacidade.<br/>
												Após receber sua solicitação e informações suficientes para verificar sua identidade,
												forneceremos uma cópia dos dados pessoais a que você tiver direito segundo a Lei Geral de
												Proteção de Dados Pessoais (LGPD). Confirmaremos a finalidade vinculada à utilização de tais
												dados pessoais, seus destinatários e a origem das informações.<br/>
												Você poderá nos escrever a qualquer momento solicitando alterações de certos dados pessoais que
												forem considerados incorretos ou irrelevantes ou solicitar o bloqueio, eliminação ou de qualquer
												outra forma a remoção de seus dados pessoais. Atualizaremos, bloquearemos e removeremos seus
												dados pessoais mediante solicitação de acordo com a Lei Geral de Proteção de Dados Pessoais
												(LGPD).
												<br/><br/>
												Pedido de exclusão e cancelamento de registro para recebimento de mensagens de marketing:<br/>
												Todos nossos comunicados de marketing contêm uma forma fácil de exclusão de registro para
												recebimento de mensagens futuras, pois, nesses comunicados, disponibilizamos link pelo qual você
												poderá cancelar o seu registro, exceto pelo WhatsApp (nesse caso, pedimos que você nos contate
												pelos meios informados abaixo). Também será possível solicitar a exclusão de canais particulares
												(por exemplo, e-mail ou SMS) da forma indicada na mensagem recebida em tal canal ou por meio das
												configurações da sua conta com a Barbo Empreendimentos.<br/>
												Caso opte pela exclusão do recebimento de mensagens de marketing, você poderá utilizar o link de
												cancelamento de inscrição contido na mensagem que você tiver recebido ou, alternativamente,
												poderá entrar em contato conosco através dos meios mencionados abaixo:
												<br/><br/>
												&bull;  Atendimento ao Cliente: <br/>
												&bull;  Através dos telefones: +55 (19)9.9696-5525  (WhatsApp)<br/>
												&bull;  Através do e-mail: contato@barbo.com.br<br/>
												&bull;  Contato do Encarregado de Proteção de Dados – Andreia Ventura<br/>
												<br/><br/>
												Observe que, caso você opte pelo cancelamento do recebimento de nossas mensagens de marketing da
												forma explicada acima, continuaremos a processar seus dados pessoais para outras finalidades já
												mencionadas nesta Política, especialmente para permitir que possamos entender seus interesses e
												preferências, porém, não iremos mais utilizar seus dados pessoais para enviar mensagens de
												marketing personalizadas ou não personalizadas. Caso deseje a suspensão deste processamento de
												forma parcial ou completa, explicamos como proceder no parágrafo acima.
												<br/><br/>
												Observe que alguns de nossos aplicativos de dispositivos móveis também podem enviar mensagens,
												incluindo, caso você tenha dado permissão, mensagens push, como, por exemplo, sobre novos
												produtos e serviços. Neste caso, o aplicativo fornecerá apenas notificações just-in-time antes
												de enviarmos notificações push. É possível desativar estas mensagens nas configurações de seu
												telefone ou no aplicativo ou optar por desinstalar o aplicativo para deixar de receber as
												mensagens.
												<br/><br/>
												<strong>Exclusão de dados pessoais:</strong>
												Você poderá, a qualquer momento, solicitar que a Barbo Empreendimentos elimine seus dados pessoais.
												Avaliaremos e, quando necessário, cumpriremos sua solicitação de acordo com a Lei Geral de
												Proteção de Dados Pessoais (LGPD), da forma explicada acima. Caso não seja possível atendermos
												seu pedido, informaremos a você quais as justificativas da negativa.
												<br/><br/>
												
												<strong>ALTERAÇÕES DESTA POLÍTICA:</strong>
												A Barbo Empreendimentos se obrigou a cumprir os princípios fundamentais de privacidade e proteção de
												dados aplicáveis pela legislação específica. Portanto, revisamos regularmente nossa Política de
												Privacidade online para assegurar que esta esteja livre de erros e claramente visível nos sites,
												que ela contenha as informações apropriadas sobre seus direitos e as nossas atividades de
												processamento e que seja implementada e esteja de acordo com a Lei Geral de Proteção de Dados
												Pessoais (LGPD). Caso façamos alterações significantes a esta Política de Privacidade, você será
												informado por meio de notificação postada em nossos sites e/ou aplicativos móveis.
												Ocorrendo atualizações neste documento que demandem nova coleta de consentimento, você será
												notificado por meio dos contatos que você informar.
												<br/><br/>
												<strong>INFORMAÇÕES DE CONTATO:</strong>
												Caso você tenha qualquer pergunta sobre a utilização de seus dados pessoais, sobre como exercer
												seus direitos ou sobre nossa Política de Privacidade, sinta-se à vontade para entrar em contato
												conosco através dos canais mencionados abaixo:
												<br/><br/>
												<strong>ATENDIMENTO AO CLIENTE</strong>
												Através dos telefones: (15) 3389-1029
												Através do e-mail: contato@barbo.com.br
												
												<br/><br/>
												
												<button onClick={() => dispatch(Actions.close_modal('politica'))}
												        className='col-12 text-center'>Fechar
												</button>
										
										</Content>
								</Modal.Body>
						</Modal>
				</>
		);
}
