        const allQuestions = [
            {
                question: "Em 2018, um carro autônomo da Uber matou uma pedestre no Arizona. Quem foi considerado mais responsável?",
                options: [
                    "A empresa Uber",
                    "O motorista de backup",
                    "Os engenheiros de software",
                    "A responsabilidade nunca foi totalmente esclarecida"
                ],
                correct: 3,
                explanation: "A responsabilidade foi difusa e controversa. Investigações revelaram falhas no sistema de detecção E supervisão humana inadequada, mas a atribuição clara de responsabilidade permaneceu um problema não resolvido - um dos grandes dilemas da IA autônoma."
            },
            {
                question: "O algoritmo COMPAS, usado em tribunais dos EUA, foi exposto por qual viés?",
                options: [
                    "Classificava mulheres como mais perigosas",
                    "Classificava réus negros como 'alto risco' 2x mais que brancos",
                    "Favorecia pessoas ricas",
                    "Penalizava pessoas mais jovens"
                ],
                correct: 1,
                explanation: "Em 2016, a ProPublica revelou que o COMPAS classificava réus NEGROS como 'alto risco' com 2x mais frequência que brancos, mesmo com fichas criminais idênticas. O algoritmo errava mais com negros (45% falsos positivos vs 23% para brancos)."
            },
            {
                question: "Por que a Amazon abandonou seu sistema de IA para recrutamento em 2018?",
                options: [
                    "Era muito caro para continuar",
                    "Discriminava sistematicamente mulheres",
                    "Não funcionava bem",
                    "Era muito lento e mal otimizado"
                ],
                correct: 1,
                explanation: "A IA penalizava currículos que continham palavras como 'mulher' ou 'clube feminino', e rebaixava candidatas de universidades femininas. Por quê? Foi treinada com dados históricos de contratações que já eram sexistas - a IA amplificou o viés existente."
            },
            {
                question: "Sistemas de reconhecimento facial têm taxa de erro muito maior para qual grupo?",
                options: [
                    "Homens brancos",
                    "Mulheres brancas",
                    "Homens negros",
                    "Mulheres negras"
                ],
                correct: 3,
                explanation: "Estudos do MIT e Stanford mostraram que sistemas de reconhecimento facial têm taxas de erro até 35% MAIORES para mulheres negras comparado a homens brancos. Isso tem consequências graves quando usado pela polícia para identificação."
            },
            {
                question: "Treinar o GPT-3 emitiu quanto de CO₂?",
                options: [
                    "Equivalente a 1 carro durante 1 ano",
                    "Equivalente a 5 carros durante toda vida útil",
                    "Equivalente a 100 carros durante 1 mês",
                    "Equivalente a 1000 voos internacionais"
                ],
                correct: 1,
                explanation: "Treinar o GPT-3 emitiu 552 toneladas de CO₂ - equivalente a 5 carros durante TODA a vida útil deles. Além disso, consumiu 1.287 MWh de eletricidade. O impacto ambiental da IA é massivo e geralmente invisível."
            },
            {
                question: "Qual percentual da eletricidade GLOBAL os data centers de IA consomem atualmente?",
                options: [
                    "0,1-0,2%",
                    "1-2%",
                    "5-10%",
                    "15-20%"
                ],
                correct: 1,
                explanation: "Data centers de IA consomem 1-2% da eletricidade global - e esse número pode TRIPLICAR até 2030. Uma única pesquisa no ChatGPT consome 10x mais energia que uma busca no Google tradicional."
            },
            {
                question: "Quantos empregos globalmente a Goldman Sachs estimou que seriam afetados pela IA generativa?",
                options: [
                    "30 milhões",
                    "100 milhões",
                    "300 milhões",
                    "1 bilhão"
                ],
                correct: 2,
                explanation: "Em 2023, a Goldman Sachs estimou que 300 MILHÕES de empregos globalmente poderiam ser afetados pela automação via IA generativa. Isso inclui desde operadores de call center até advogados e programadores."
            },
            {
                question: "Qual legislação pioneira sobre IA foi aprovada em 2024?",
                options: [
                    "US AI Safety Act",
                    "China AI Governance Law",
                    "Europa AI Act",
                    "Brasil LGPD-IA"
                ],
                correct: 2,
                explanation: "O AI Act da União Europeia foi a primeira legislação abrangente sobre IA do mundo. Classifica sistemas por risco, estabelece requisitos de transparência e supervisão humana, e serve como modelo para regulação global."
            },
            {
                question: "Robert Williams foi preso erroneamente em Detroit por causa de qual tecnologia?",
                options: [
                    "Reconhecimento facial",
                    "Análise de DNA",
                    "Análise de voz",
                    "Rastreamento de celular"
                ],
                correct: 0,
                explanation: "Williams, homem negro, foi preso porque reconhecimento facial o identificou erroneamente como ladrão. Ele estava no trabalho. Passou 30 horas preso. Este caso mostra os perigos reais do viés algorítmico quando usado pela polícia."
            },
            {
                question: "Quantas horas de trabalho de advogados o sistema COIN do JPMorgan substituiu por ano?",
                options: [
                    "36 mil horas",
                    "100 mil horas",
                    "360 mil horas",
                    "1 milhão de horas"
                ],
                correct: 2,
                explanation: "O COIN (Contract Intelligence) analisa documentos legais em segundos, substituindo 360 MIL horas de trabalho de advogados por ano. Isso não eliminou todos os advogados, mas mudou radicalmente o tipo de trabalho que fazem."
            },
            {
                question: "Qual é o 'Paradoxo de Jevons' relacionado à IA?",
                options: [
                    "IA mais eficiente pode aumentar consumo total de recursos",
                    "IA é mais cara que trabalho humano",
                    "IA não pode ser regulada",
                    "IA sempre prejudica o meio ambiente"
                ],
                correct: 0,
                explanation: "O Paradoxo de Jevons mostra que ganhos de eficiência podem aumentar consumo total. Exemplo: transporte otimizado por IA fica mais barato/conveniente, então mais pessoas viajam, aumentando emissões totais. Eficiência ≠ sustentabilidade automática."
            },
            {
                question: "Deepfakes pornográficos vitimizam principalmente qual grupo?",
                options: [
                    "Homens públicos",
                    "Mulheres",
                    "Políticos",
                    "Celebridades masculinas"
                ],
                correct: 1,
                explanation: "90% das vítimas de deepfakes pornográficos não-consensuais são MULHERES. A tecnologia de IA generativa permite criar vídeos ultra-realistas falsos, causando dano psicológico grave e sendo usada para vingança, chantagem e assédio."
            },
            {
                question: "O que o GDPR europeu garante sobre decisões automatizadas?",
                options: [
                    "IA não pode tomar decisões sozinha",
                    "Direito à explicação sobre decisões que afetam você",
                    "IA é proibida na Europa",
                    "Empresas devem pagar pelo uso de IA"
                ],
                correct: 1,
                explanation: "O GDPR estabelece o 'direito à explicação' - cidadãos podem exigir explicações sobre decisões automatizadas que os afetem. Se um banco recusar seu empréstimo por IA, você tem direito de saber por quê. O Brasil ainda não tem lei equivalente."
            },
            {
                question: "Quantos motoristas de caminhão nos EUA estão em risco por veículos autônomos?",
                options: [
                    "500 mil",
                    "1,5 milhão",
                    "3,5 milhões",
                    "10 milhões"
                ],
                correct: 2,
                explanation: "3,5 milhões de motoristas de caminhão nos EUA podem ver suas profissões ameaçadas por veículos autônomos. No Brasil são ~2 milhões de caminhoneiros. A automação promete 30-40% de economia para empresas e 90% menos acidentes."
            },
            {
                question: "Qual percentual de call centers já substituiu atendentes por chatbots?",
                options: [
                    "15%",
                    "35%",
                    "65%",
                    "85%"
                ],
                correct: 2,
                explanation: "65% dos call centers já adotaram IA e substituíram atendentes por chatbots. Isso eliminou 1,2 milhão de empregos só nos EUA, com economia de 30-50% em custos operacionais. Atendimento humano ficou restrito a casos complexos."
            },
            {
                question: "Programadores que usam GitHub Copilot são quantos % mais produtivos?",
                options: [
                    "15%",
                    "30%",
                    "55%",
                    "85%"
                ],
                correct: 2,
                explanation: "Programadores com GitHub Copilot são 55% mais produtivos. 92% dos desenvolvedores já usam ferramentas de IA. Mas isso cria risco: programadores JUNIORES podem ser substituídos, enquanto seniores que sabem usar IA ficam mais valiosos."
            },
            {
                question: "A China implementou sistemas massivos de vigilância com IA para monitorar qual população?",
                options: [
                    "População Tibetana",
                    "População Uigur em Xinjiang",
                    "Manifestantes em Hong Kong",
                    "Toda população urbana"
                ],
                correct: 1,
                explanation: "A China implementou reconhecimento facial e vigilância massiva por IA para monitorar a população Uigur em Xinjiang, levantando alarmes globais sobre direitos humanos, privacidade e uso autoritário de tecnologia."
            },
            {
                question: "Qual é o principal problema das 'caixas pretas' (black box algorithms)?",
                options: [
                    "São muito caras",
                    "Nem os criadores conseguem explicar como chegam a decisões",
                    "São lentas demais",
                    "Precisam de muito treinamento"
                ],
                correct: 1,
                explanation: "Modelos complexos de deep learning funcionam como 'caixas pretas' - nem seus CRIADORES conseguem explicar completamente como chegam a certas decisões. Isso é problemático quando usados em medicina, justiça e crédito, onde transparência é crucial."
            },
            {
                question: "Vagas relacionadas a IA cresceram quanto entre 2020-2023?",
                options: [
                    "50%",
                    "150%",
                    "300%",
                    "500%"
                ],
                correct: 2,
                explanation: "O LinkedIn reportou que vagas relacionadas a IA cresceram mais de 300% entre 2020 e 2023. Novas profissões surgiram: Engenheiro de Prompt, Auditor de Algoritmos, Especialista em Ética de IA - carreiras que não existiam há 10 anos."
            },
            {
                question: "Qual startup usa IA para detectar desmatamento ilegal na Amazônia?",
                options: [
                    "Amazon Forest AI",
                    "Rainforest Connection",
                    "Green Intelligence",
                    "Eco Neural"
                ],
                correct: 1,
                explanation: "A Rainforest Connection usa IA para analisar áudio de florestas tropicais, detectando sons de motosserras e alertando autoridades sobre desmatamento ilegal em tempo real. O sistema já protegeu milhares de hectares na América Latina e África."
            },
            {
                question: "O escândalo Cambridge Analytica envolveu dados de quantos usuários do Facebook?",
                options: [
                    "8,7 milhões",
                    "27 milhões",
                    "87 milhões",
                    "187 milhões"
                ],
                correct: 2,
                explanation: "87 milhões de usuários do Facebook tiveram dados usados para manipulação política sem conhecimento. Demonstrou como dados massivos + IA podem ser usados para influenciar eleições e manipular comportamento em escala."
            },
            {
                question: "Qual é o maior desafio ético das 'armas autônomas letais' (robôs assassinos)?",
                options: [
                    "São muito caras",
                    "Decisões de vida ou morte delegadas a máquinas sem intervenção humana",
                    "Podem ser hackeadas facilmente",
                    "São imprecisas"
                ],
                correct: 1,
                explanation: "O dilema fundamental é: decisões de VIDA ou MORTE não devem ser delegadas a máquinas. Organizações como Human Rights Watch lideram campanhas para banir armas autônomas, argumentando que matar sem intervenção humana viola dignidade humana."
            },
            {
                question: "Designers que usam IA generativa (DALL-E, Midjourney) reduziram tempo de prototipagem em quanto?",
                options: [
                    "20%",
                    "40%",
                    "60%",
                    "80%"
                ],
                correct: 2,
                explanation: "40% dos designers já usam IA generativa, com redução de 60% no tempo de prototipagem. DALL-E gera imagens em 10 segundos vs horas de trabalho manual. Mas designers focam cada vez mais em ESTRATÉGIA e direção criativa, não execução."
            }
        ];

        let selectedQuestions = [];
        let currentQuestion = 0;
        let correctAnswers = 0;
        let wrongAnswers = 0;
        let userAnswers = [];

        function selectRandomQuestions() {
            const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
            selectedQuestions = shuffled.slice(0, 5);
        }

        function loadQuestion() {
            const question = selectedQuestions[currentQuestion];
            const container = document.getElementById('quizContainer');
            
            container.innerHTML = `
                <div class="question-header">
                    <div class="question-number">Pergunta ${currentQuestion + 1} de 5</div>
                </div>
                <div class="question-text">${question.question}</div>
                <div class="options" id="options">
                    ${question.options.map((option, index) => `
                        <div class="option" onclick="selectOption(${index})">
                            <strong>${String.fromCharCode(65 + index)})</strong> ${option}
                        </div>
                    `).join('')}
                </div>
                <div class="explanation" id="explanation">
                    <h4>Explicação:</h4>
                    <p>${question.explanation}</p>
                </div>
                <div class="navigation">
                    <button class="btn" onclick="previousQuestion()" ${currentQuestion === 0 ? 'disabled' : ''}>Anterior</button>
                    <button class="btn" onclick="nextQuestion()" id="nextBtn" disabled>
                        ${currentQuestion === 4 ? 'Finalizar' : 'Próximo'}
                    </button>
                </div>
            `;

            updateProgress();
        }

        function selectOption(index) {
            const question = selectedQuestions[currentQuestion];
            const options = document.querySelectorAll('.option');
            
            options.forEach(opt => {
                opt.classList.remove('selected', 'correct', 'wrong');
            });
            
            options[index].classList.add('selected');
            
            const isCorrect = index === question.correct;
            
            if (isCorrect) {
                options[index].classList.add('correct');
                if (!userAnswers[currentQuestion]) {
                    correctAnswers++;
                    updateScores();
                }
            } else {
                options[index].classList.add('wrong');
                options[question.correct].classList.add('correct');
                if (!userAnswers[currentQuestion]) {
                    wrongAnswers++;
                    updateScores();
                }
            }
            
            userAnswers[currentQuestion] = {index, isCorrect};
            
            document.getElementById('explanation').classList.add('show');
            document.getElementById('nextBtn').disabled = false;
        }

        function nextQuestion() {
            if (currentQuestion < 4) {
                currentQuestion++;
                loadQuestion();
            } else {
                showResults();
            }
        }

        function previousQuestion() {
            if (currentQuestion > 0) {
                currentQuestion--;
                loadQuestion();
            }
        }

        function updateScores() {
            document.getElementById('correctScore').textContent = correctAnswers;
            document.getElementById('wrongScore').textContent = wrongAnswers;
        }

        function updateProgress() {
            document.getElementById('progressScore').textContent = `${currentQuestion + 1}/5`;
        }

        function showResults() {
            document.getElementById('quizContainer').style.display = 'none';
            document.querySelector('.score-sidebar').style.display = 'none';
            const resultScreen = document.getElementById('resultScreen');
            resultScreen.classList.add('show');
            
            document.getElementById('finalScore').textContent = `${correctAnswers}/5`;
            
            let message = '';
            if (correctAnswers === 5) {
                message = 'PERFEITO! Você domina os dilemas éticos da IA !';
                document.getElementById('prizeMessage').style.display = 'block';
            } else if (correctAnswers >= 4) {
                message = 'Excelente! Você prestou atenção na explicação!';
            } else if (correctAnswers >= 3) {
                message = 'Bom trabalho! Você tem conhecimento sólido!';
            } else if (correctAnswers >= 2) {
                message = 'Não foi mal! Mas há mais para aprender.';
            } else {
                message = 'Continue estudando! Ética em IA é complexa.';
            }
            
            document.getElementById('resultMessage').textContent = message;
        }

        selectRandomQuestions();
        loadQuestion();