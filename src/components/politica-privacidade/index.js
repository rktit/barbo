import React from 'react';

import { Modal } from 'react-bootstrap'

import { useDispatch, useSelector } from "react-redux";
import * as Actions from 'store/actions';

import { Content, Title } from './style'
import * as Icon from "react-bootstrap-icons";

export default function ModalPolitica() {

	const _modal = useSelector(({ modal }) => modal.politica);
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
								className='text-center'><Icon.XCircle color='#252525' size={18} /></a></div>
						</Title>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Content className='row col-12 text-left'>
						<strong>SOBRE A NOSSA POLÍTICA DE PRIVACIDADE</strong>

						Como tratamos seus dados pessoais

						Nós, da Barbo, sabemos como é importante que você esteja seguro sobre seus Dados Pessoais. <br/>
						Por isto todas as informações pessoais relativas a usuários, clientes ou visitantes, que usem nossos serviços digitais ou físicos, são tratadas em concordância com a Lei da Proteção de Dados Pessoais, além de atender às boas práticas de Segurança da Informação.<br/><br/>

						<strong>Por que coletamos e tratamos seus Dados Pessoais?</strong><br/>

						Ao oferecermos nossos serviços, precisamos coletar e tratar seus Dados Pessoais para as seguintes finalidades:<br/>

						a) prover os serviços de incorporação e comercialização de imóveis;<br/>
						b) atender nossos parceiros de negócio, como nos financiamentos dos imóveis que comercializamos;<br/>
						c) atender às obrigações legais e administrativas de órgãos públicos ligados a estes serviços, no âmbito municipal, estadual e federal.<br/><br/>

						Assim, quando realizamos qualquer atividade que utiliza Dados Pessoais, como cadastros, processamentos diversos relativos ao desenvolvimento do serviço contratado, fazemos isto com muito respeito e responsabilidade e tomamos medidas técnicas e administrativas para assegurar a sua privacidade.<br/><br/>

						Para tanto, desenvolvemos uma Política de Privacidade para cuidar especificamente de Dados Pessoais, como parte integrante do nosso SGPD – Sistema de Gestão de Privacidade e Dados e que descreve, entre outras coisas, como os dados são coletados, armazenados, tratados, compartilhados, retidos e descartados.<br/><br/>

						Também, estamos constantemente aprimorando nossa Política de Privacidade e, em nosso site, além de encontrar esta política, você também encontrará as formas para entrar em contato conosco e esclarecer quaisquer dúvidas sobre Privacidade de Dados Pessoais.<br/><br/><br/>



						<strong>POLÍTICA DE PRIVACIDADE</strong><br/>

						Em agosto de 2018, com a publicação da LGPD – Lei Geral de Proteção de Dados, surgiram novos conceitos e definições que norteiam a forma como os Dados Pessoais devem ser tratados pelas organizações.<br/>

						Assim, descrevemos a seguir estes conceitos e definições importantes, bem como outros detalhes da nossa Política de Privacidade e como adequamos a BARBO para atender às leis vigentes.<br/><br/>

						1. Entenda quem é quem perante a LGPD<br/><br/>

						1.1. Titular<br/>

						É você, a pessoa que possui os Dados Pessoais, seja na condição de cliente BARBO, colaborador ou mesmo de um visitante, presencial ou remoto (on-line).<br/><br/>

						1.2. Controlador<br/>

						Somos nós, a BARBO, onde através de nossas empresas, áreas e departamentos competem as decisões referentes ao tratamento de Dados Pessoais.<br/><br/>

						1.3. Controlador conjunto<br/>

						São empresas homologadas pela BARBO, como por exemplo imobiliárias parceiras, que podem coletar informações adicionais para atender a um serviço prestado a você.<br/><br/>

						1.4. Operador<br/>

						Em determinadas situações, são nossos parceiros credenciados que, em nosso nome, realizam o tratamento de Dados Pessoais.<br/><br/>

						1.4. Encarregado (DPO – Data Protection Officer)<br/>

						É a pessoa responsável por assegurar o cumprimento da LGPD dentro de uma organização. Na BARBO o Encarregado trabalha em conjunto com uma equipe multidisciplinar e um comitê para poder conduzir os trabalhos necessários nas áreas de tecnologia, administrativa e jurídica.<br/><br/>

						1.5. ANPD<br/>

						É a Autoridade Nacional de Proteção de Dados, órgão federal instituído especialmente para zelar, auxiliar as empresas e fiscalizar o cumprimento da LGPD no Brasil.<br/><br/>

						2. Alguns conceitos e definições importantes<br/>

						(os conceitos são apresentados em ordem que vão sendo mencionados)<br/><br/>

						2.1. Política de Privacidade<br/>

						É o conjunto de regras, procedimentos e orientações administrativas e de tecnologia a serem observados e seguidos por todos os envolvidos de forma a assegurar a privacidade de seus Dados Pessoais.<br/><br/>

						2.2. Dado Pessoal<br/>

						É o dado relativo a uma pessoa, sendo este capaz de identificá-la ou tornar possível a sua identificação. Como exemplo, são Dados Pessoais que permitem a sua identificação: Nome, CPF, RG, endereço, telefone, e-mail etc.<br/><br/>

						2.3. Dado Pessoal Sensível<br/>

						É qualquer informação sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa.<br/><br/>

						2.4. Tratamento<br/>

						É qualquer ação realizada com Dados Pessoais. Por exemplo, coleta, armazenamento, consulta, atualização, compartilhamento, transmissão, classificação, reprodução, exclusão, inativação etc.<br/><br/>

						2.5. Tratamento de Dados Pessoais de Crianças e de Adolescentes<br/>

						O tratamento de Dados Pessoais de crianças somente deve ser realizado com o consentimento específico dado por pelo menos um dos pais ou pelo responsável legal.<br/><br/>

						2.6. Consentimento<br/>

						É a sua declaração autorizando o tratamento de seus Dados Pessoais quando não houver uma outra base legal, como por exemplo, um contrato. Nós sempre solicitaremos o consentimento para uma finalidade específica e você terá total liberdade para concordar ou não com os Termos de Tratamento dos Dados Pessoais. Não concordando, os Dados Pessoais não serão coletados, porém isto poderá limitar alguma prestação de nossos serviços ou experiências.<br/>

						Os Dados Pessoais poderão ser utilizados sem o prévio consentimento do Titular ou responsável legal nas seguintes hipóteses: a) se tivermos que cumprir obrigação legal ou regulatória; b) para exercermos nossos direitos em processos judiciais e administrativos, c) para realizarmos estudos e pesquisas, assegurando a anonimização; d) para executarmos o contrato ou procedimentos preliminares a este; e) para proteção à vida ou da segurança física do Titular, f) para atendermos legítimo interesse, respeitando-se os direitos e liberdades fundamentais do Titular; e g) para proteção do crédito.<br/><br/>

						2.7. Legítimo interesse<br/>

						É o que permite que nós possamos tratar Dados Pessoais para atender as necessidades operacionais, administrativas e legais, de forma a prover os serviços oferecidos pela BARBO a você. A LGPD define que os interesses só serão considerados legítimos se a forma de uso dos Dados Pessoais não for contrária à legislação brasileira, a finalidade de uso for específica e desde que seja dada efetiva transparência a tais usos, bem como sejam respeitados os seus direitos e liberdades individuais.<br/><br/>

						2.8. Bases legais<br/>

						São as possibilidades permitidas pela lei e que autorizam o tratamento de Dados Pessoais. Por exemplo, o consentimento é uma base legal, como também a necessidade de cumprir um contrato que nós temos com você ou o cumprimento de uma outra legislação.<br/><br/>

						2.9. Plataformas<br/>

						São os sites, sistemas e aplicativos com funções específicas e que podem coletar e tratar dados diversos, incluindo Dados Pessoais.<br/><br/>

						2.10. Serviços e Experiências<br/>

						Serviços são as atividades que realizamos para você. Os serviços podem ser presenciais ou remotos, digitais ou não digitais. Experiências são as formas como você se relaciona ou interage com a gente.<br/><br/>

						2.11. Tecnologias<br/>

						São todas as ferramentas digitais, sistemas, aplicativos, incluindo as de identificação pessoal, como por exemplo sites, formulários, cadastros digitais, ou ainda o acesso ao Wi-Fi e outros serviços oferecidos em razão do uso dos serviços operacionais ou administrativos, como câmeras de segurança, realidade aumentada etc.<br/><br/>

						2.12. Cookies<br/>

						São arquivos que armazenam temporariamente, no seu próprio computador ou dispositivo móvel, sobre o que você está visitando em um determinado site da Internet. Com base nestas informações, as empresas que utilizam cookies em seus respectivos sites podem aprimorar a experiência de navegação para cada pessoa, por exemplo, oferecendo uma melhor visualização ou até mesmo oferecendo informações mais relevantes a você. Eventualmente poderemos utilizar cookies para melhorar a sua experiência de navegação, e quando isto acontecer você será avisado durante a navegação no site, e poderá aceitar ou não.<br/><br/>

						3. Quais Dados Pessoais são coletados e de qual forma?<br/>

						Para poder prover nossos serviços, nós coletamos seus Dados Pessoais cujo tipo de dado se propõe a cumprir um objetivo específico.<br/>

						A definição de quais dados coletamos, respeita as necessidades mínimas e legítimas de cada serviço, que vão desde cadastros, atividades administrativas, financeiras, geração de relatórios, geração de informações para atendimento a órgãos públicos, fiscais, jurídicos, no âmbito municipal, estadual e federal.<br/>

						Estes dados podem ser coletados através de documentos entregues por você, como, por exemplo, documentos originais emitidos por outras empresas ou órgãos públicos, cópias impressas de documentos pessoais, informações suas para contato e emissão de boletos bancários, entre outros.<br/>

						Também, estes dados podem ser coletados por formulários eletrônicos, sistemas remotos, páginas da Web, ou qualquer outro sistema digital de coleta de dados.<br/><br/>

						4. Por quanto tempo mantemos seus Dados Pessoais?<br/>

						Nosso SGPD – Sistema de Gestão da Proteção de Dados possui regras específicas sobre a coleta, armazenamento, tratamento, manutenção e descarte de Dados Pessoais, bem como o período de retenção adequado para cada tipo de Dado Pessoal coletado, considerando a necessidade, finalidade ou para o cumprimento de obrigações legais, regulatórias, contratuais, entre outras, sempre fundamentadas em bases legais.<br/>

						A manutenção, seja de um documento impresso ou digital, depende de cada atividade em que este deve ser tratado, sendo que em alguns casos as leis relacionadas podem nos obrigar a manter dados de forma perene.<br/>

						Também, dados pessoais poderão ser mantidos sob nossa custódia por tempo indeterminado, armazenados em sistemas apropriados, e seguindo todos os critérios de Segurança da Informação, nas seguintes circunstâncias:<br/><br/>

						a) para o cumprimento de novas obrigações legais em fase de elaboração;<br/>
						b) para atender aos critérios de conformidade constantes em nosso Sistema de Gestão de Segurança da Informação;<br/>
						c) para combater ações de fraudes ou corrupção;<br/>
						d) para assegurar outras situações não previstas e que julgarmos serem de interesse do Titular a recuperação dos seus dados pessoais, sendo assim legítimo interesse.<br/><br/>

						5. Com quem compartilhamos seus Dados Pessoais?<br/>

						Para que possamos prestar os nossos serviços, utilizamos parceiros credenciados que poderão tratar parcialmente seus Dados Pessoais, limitados a finalidade legítima e mínimo necessário. Também, nestes casos, adotamos políticas que exigem destes parceiros práticas de segurança e privacidade adequadas para o tratamento dos Dados Pessoais.<br/><br/>

						São considerados nossos parceiros de negócio, ou de apoio aos nossos serviços, e que poderão tratar seus dados pessoais:<br/>

						a) empresas coligadas do grupo;<br/>
						b) imobiliárias e corretores de imóveis;<br/>
						c) instituições financeiras;<br/>
						d) escritórios jurídicos ou empresas de cobrança;<br/>
						e) outras empresas coligadas à BARBO, como por exemplo uma SPE (Sociedade de Propósito Específico), cuja finalidade é a gestão dos empreendimentos imobiliários.<br/><br/>

						Também, para cumprirmos a lei, poderá ser necessário compartilhar seus Dados Pessoais com autoridades públicas, mas sempre defenderemos os seus direitos como Titular.<br/>

						É importante salientar que não compartilhamos seus Dados Pessoais com fabricantes de móveis, fornecedores de eletrodomésticos, fornecedores ou prestadores de serviços em geral.<br/><br/>

						6. Quais são os seus direitos como Titular?<br/>

						Você poderá a qualquer momento:<br/><br/>

						6. Quais são os seus direitos como Titular?<br/><br/>

						6.1. Obter a Confirmação e Acesso a uma cópia dos seus Dados Pessoais existentes em nossos sistemas, bem com solicitar informações sobre com quem Compartilhamos seus Dados Pessoais.<br/><br/>

						6.2. Solicitar Correção ou Atualização dos Dados Pessoais, de forma a mantê-los precisos.<br/><br/>

						6.3. Solicitar a Eliminação de Dados Pessoais que não sejam mais necessários para o cumprimento dos serviços contratados conosco ou para o cumprimento de questões legais. Em certos casos, alguns dados poderão ser Anonimizados, ou seja, serão alterados de tal forma que não permitam sua identificação. Em outros casos, informaremos sobre a impossibilidade de eliminação dos dados pessoais em razão de cumprimento de obrigação legal, ou para cumprir um dos tópicos listados em “Por quanto tempo mantemos seus Dados Pessoais?”.<br/><br/>

						6.4. Solicitar Portabilidade dos seus Dados Pessoais para outros prestadores de serviços semelhantes, na forma definida no contrato de prestação de serviços.<br/><br/>

						6.5. Não Consentir que seus Dados Pessoais sejam utilizados. Sempre que necessário, nós solicitaremos o seu consentimento de forma clara e objetiva e você será livre para consentir ou não com o uso dos seus Dados Pessoais. Não consentindo e sendo o Dado Pessoal necessário para a realização de um serviço, ficaremos limitados e não poderemos atender à sua necessidade.<br/><br/>

						6.6. Revogar (retirar) um consentimento realizado anteriormente. Contudo, nos casos de revogação pelo Titular ou de seu responsável legal, é possível que tenhamos que cancelar os serviços contratados ou limitar nossos serviços e experiências.<br/><br/>

						6.7. Você ainda poderá Opor-se ao tratamento de algum de seus Dados Pessoais desde que estes dados não atendam a um legítimo interesse ou não atendam a alguma necessidade legal ou contratual.<br/><br/>

						7. Quais são nossas responsabilidades e como protegemos seus Dados Pessoais?<br/><br/>

						Na condição de Controlador, nós cuidamos dos seus Dados Pessoais com responsabilidade e utilizamos somente para fins de prestação dos nossos Serviços. Além desta política, adotamos conceituadas técnicas e boas práticas de segurança e governança, incluindo o uso de criptografia e outros sistemas de prevenção de incidentes, ações educativas, mecanismos de supervisão, monitoramento e procedimentos para mitigar riscos e outros aspectos relacionados à Segurança da Informação, tudo com o objetivo de proteger seus Dados Pessoais.<br/>

						Embora todas estas ações, a segurança da informação não depende exclusivamente de nossas ações. Por exemplo, acesso ou uso não autorizado das suas contas em serviços diversos de Internet, falhas dos dispositivos, programas e antivírus desatualizados, os quais não estão sob o nosso controle, entre outros fatores, podem comprometer a segurança dos seus Dados Pessoais.<br/>

						Portanto, a sua atuação preventiva, postura cuidadosa e confidencialidade dos logins e senhas, também é de extrema importância para manter em um ambiente seguro.<br/><br/>

						8. Como falar sobre seus Dados Pessoais com a gente?<br/>

						Se você acredita que seus Dados Pessoais foram utilizados de forma incompatível com esta Política de Privacidade ou com a Lei Geral de Proteção de Dados Pessoais, ou mesmo se você tiver dúvidas sobre o tratamento de seus Dados Pessoais ou exercício de seus direitos, bem como comentários e sugestões sobre esta política, entre em contato conosco.<br/><br/>

						• Encarregado (DPO): MODUS DPO - Flávio Ibelli Callegari<br/>
						• E-mail: dpo@modusdpo.com.br<br/>
						• Endereço: MODUS DPO - Rua do Rosário, 1524, Cj 08, Centro, Piracicaba – SP 13400-186 A/c DPO | (19) 2538-9460<br/><br/>

						9. Atualização e mudanças nesta Política de Privacidade.<br/>

						Como estamos em constante processo de aperfeiçoamento dos nossos serviços, nossa Política de Privacidade também será aperfeiçoada, sempre objetivando atender às novas necessidades, aos requisitos no tratamento de dados pessoais, alterações legais ou novas exigências ou regulamentações da ANPD.<br/><br/>

						10. Aplicação<br/>

						Esta Política de Privacidade se aplica às seguintes empresas: BARBO RIO CLARO EMPREENDIMENTOS LTDA, pessoa jurídica de direito privado, CNPJ/MF sob nº 11.004.164/0001-03, Rua 09 CJ, nº 500, Sala 02, Cidade Jardim, Rio Claro/SP, CEP 13501-100; e EMPREENDIMENTOS BARBO LTDA, pessoa jurídica de direito privado, CNPJ/MF sob nº 00.567.422/0001-43, Rua 09 CJ, nº 500, Sala 01, Cidade Jardim, Rio Claro/SP, CEP 13501-100<br/>

						<br /><br />

						<button onClick={() => dispatch(Actions.close_modal('politica'))}
							className='col-12 text-center'>Fechar
						</button>

					</Content>
				</Modal.Body>
			</Modal>
		</>
	);
}
