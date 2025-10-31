// Trocar entre jogos
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const gameType = this.dataset.game;
        
        // Remover active de tudo
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.game-content').forEach(g => g.classList.remove('active'));
        
        // Adicionar active no selecionado
        this.classList.add('active');
        document.getElementById('game-' + gameType).classList.add('active');
    });
});

// JOGO 1: CURRÍCULO
document.getElementById('submitCurriculo').addEventListener('click', function() {
    const nome = document.getElementById('nome').value.toLowerCase();
    const universidade = document.getElementById('universidade').value;
    const experiencia = document.getElementById('experiencia').value.toLowerCase();
    const atividades = document.getElementById('atividades').value.toLowerCase();
    const resultDiv = document.getElementById('resultCurriculo');
    
    // Detectar palavras que causam viés
    const palavrasVies = [];
    let pontuacao = 100;
    
    // Verificar nome (detectar nomes femininos comuns)
    const nomesFemininos = ['maria', 'ana', 'julia', 'beatriz', 'carolina', 'fernanda', 'amanda', 'jessica', 'camila', 'larissa'];
    if (nomesFemininos.some(n => nome.includes(n))) {
        pontuacao -= 15;
        palavrasVies.push('Nome identificado como feminino pelo algoritmo');
    }
    
    // Verificar universidade feminina
    if (universidade === 'unigranrio' || universidade === 'hunter') {
        pontuacao -= 20;
        palavrasVies.push('Universidade historicamente feminina detectada');
    }
    
    // Verificar palavras-chave na experiência e atividades
    const palavrasProblematicas = {
        'mulher': 'Palavra "mulher" encontrada',
        'feminino': 'Palavra "feminino/feminina" encontrada',
        'feminina': 'Palavra "feminino/feminina" encontrada',
        'capitã': 'Cargo feminino identificado',
        'time feminino': 'Menção a "time feminino"',
        'clube feminino': 'Menção a "clube feminino"',
        'grupo de mulheres': 'Menção a "grupo de mulheres"',
        'ong para mulheres': 'Trabalho voluntário focado em mulheres'
    };
    
    const textoCompleto = experiencia + ' ' + atividades;
    
    for (let palavra in palavrasProblematicas) {
        if (textoCompleto.includes(palavra)) {
            pontuacao -= 12;
            palavrasVies.push(palavrasProblematicas[palavra]);
        }
    }
    
    // Gerar resultado
    const aprovado = pontuacao >= 70;
    const statusEmoji = aprovado ? '✅' : '❌';
    const statusTexto = aprovado ? 'APROVADO' : 'REJEITADO';
    const statusClass = aprovado ? 'aprovado' : 'rejeitado';
    
    let viesesHTML = '';
    if (palavrasVies.length > 0) {
        viesesHTML = `
            <div class="bias-reveal">
                <h4>🚨 VIESES DETECTADOS PELO ALGORITMO</h4>
                <ul class="bias-list">
                    ${palavrasVies.map(v => `<li><strong>Penalização:</strong> ${v}</li>`).join('')}
                </ul>
                <p style="margin-top: 1rem; color: var(--text-gray);">
                    <strong>TOTAL:</strong> Seu currículo perdeu <span style="color: var(--color-wrong); font-size: 1.2rem;">${100 - pontuacao} pontos</span> por características associadas a gênero feminino.
                </p>
            </div>
        `;
    }
    
    resultDiv.innerHTML = `
        <div class="result-card ${statusClass}">
            <div class="result-status">${statusEmoji}</div>
            <div class="result-title">${statusTexto}</div>
            <div class="result-score">Pontuação: ${pontuacao}/100</div>
            <div class="result-description">
                ${aprovado ? 
                    'Parabéns! Seu currículo foi aprovado pelo algoritmo e você avançou para a próxima fase.' :
                    'Infelizmente seu currículo foi rejeitado pelo sistema automatizado. Você não será entrevistado.'
                }
            </div>
            
            ${viesesHTML}
            
            <div class="real-case">
                <h4>📋 CASO REAL: Amazon (2018)</h4>
                <p>
                    A Amazon desenvolveu um sistema de IA para avaliar currículos e automatizar contratações. 
                    <strong>O algoritmo foi treinado com 10 anos de dados históricos</strong> de contratações da empresa - 
                    que eram predominantemente masculinas em áreas técnicas.
                </p>
                <p style="margin-top: 1rem;">
                    <strong>Resultado:</strong> A IA aprendeu que "bom candidato = homem" e passou a 
                    <span style="color: var(--color-wrong);">penalizar automaticamente</span> currículos contendo:
                </p>
                <ul style="margin-top: 0.5rem; padding-left: 2rem; color: var(--text-gray);">
                    <li>A palavra "mulher" (ex: "capitã do time feminino")</li>
                    <li>Nomes de universidades exclusivamente femininas</li>
                    <li>Qualquer menção a atividades relacionadas a mulheres</li>
                </ul>
                <p style="margin-top: 1rem;">
                    A Amazon <strong>abandonou o projeto</strong> depois que o viés foi descoberto. 
                    Mas quantas empresas usam sistemas similares <span style="color: var(--color-wrong);">sem descobrir o viés</span>?
                </p>
            </div>
        </div>
    `;
    
    resultDiv.classList.add('show');
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// JOGO 2: EMPRÉSTIMO
document.getElementById('submitEmprestimo').addEventListener('click', function() {
    const nome = document.getElementById('nomeEmp').value.toLowerCase();
    const cep = document.getElementById('cep').value;
    const renda = parseFloat(document.getElementById('renda').value);
    const profissao = document.getElementById('profissao').value;
    const credito = document.getElementById('credito').value;
    const dependentes = document.getElementById('dependentes').value;
    const resultDiv = document.getElementById('resultEmprestimo');
    
    // Calcular pontuação
    const vieses = [];
    let pontuacao = 100;
    
    // CEPs "de risco" (periferias)
    const cepsRisco = ['21', '26', '23', '24', '27']; // Primeiros 2 dígitos
    const cepPrefix = cep.substring(0, 2);
    if (cepsRisco.includes(cepPrefix)) {
        pontuacao -= 25;
        vieses.push(`CEP ${cep} classificado como "área de alto risco" pelo algoritmo`);
    }
    
    // Profissões "de risco"
    const profissoesRisco = ['autonomo', 'artista', 'motorista', 'domestica'];
    if (profissoesRisco.includes(profissao)) {
        pontuacao -= 20;
        vieses.push(`Profissão "${document.querySelector(`#profissao option[value="${profissao}"]`).textContent}" considerada instável`);
    }
    
    // Dependentes
    if (dependentes === '3+') {
        pontuacao -= 15;
        vieses.push('Múltiplos dependentes aumentam "risco de inadimplência"');
    } else if (dependentes === '1-2') {
        pontuacao -= 8;
        vieses.push('Presença de dependentes penalizada pelo algoritmo');
    }
    
    // Crédito
    const creditoScores = {
        'excelente': 0,
        'bom': -5,
        'regular': -20,
        'ruim': -35
    };
    pontuacao += creditoScores[credito];
    
    // Renda baixa
    if (renda < 3000) {
        pontuacao -= 20;
        vieses.push(`Renda de R$ ${renda} considerada insuficiente`);
    } else if (renda < 5000) {
        pontuacao -= 10;
        vieses.push(`Renda de R$ ${renda} abaixo da média de aprovações`);
    }
    
    // Resultado
    const aprovado = pontuacao >= 65;
    const statusEmoji = aprovado ? '✅' : '❌';
    const statusTexto = aprovado ? 'EMPRÉSTIMO APROVADO' : 'EMPRÉSTIMO NEGADO';
    const statusClass = aprovado ? 'aprovado' : 'rejeitado';
    
    let viesesHTML = '';
    if (vieses.length > 0) {
        viesesHTML = `
            <div class="bias-reveal">
                <h4>🚨 FATORES QUE PENALIZARAM SUA SOLICITAÇÃO</h4>
                <ul class="bias-list">
                    ${vieses.map(v => `<li>${v}</li>`).join('')}
                </ul>
                <p style="margin-top: 1.5rem; color: var(--text-gray); line-height: 1.8;">
                    <strong>O PROBLEMA:</strong> Algoritmos de crédito aprendem com dados históricos que refletem 
                    <span style="color: var(--color-wrong);">desigualdades sociais e econômicas</span>. 
                    Pessoas de bairros periféricos, certas profissões, ou com dependentes são sistematicamente 
                    penalizadas - mesmo quando têm capacidade de pagamento.
                </p>
            </div>
        `;
    }
    
    resultDiv.innerHTML = `
        <div class="result-card ${statusClass}">
            <div class="result-status">${statusEmoji}</div>
            <div class="result-title">${statusTexto}</div>
            <div class="result-score">Score Final: ${Math.max(pontuacao, 0)}/100</div>
            <div class="result-description">
                ${aprovado ?
                    `Seu empréstimo de R$ 50.000 foi APROVADO com taxa de ${8 + (100 - pontuacao) * 0.2}% ao ano.` :
                    'Seu pedido de empréstimo foi NEGADO pelo sistema automatizado. Não há recurso ou explicação detalhada disponível.'
                }
            </div>
            
            ${viesesHTML}
            
            <div class="real-case">
                <h4>💳 DISCRIMINAÇÃO ALGORÍTMICA NO CRÉDITO</h4>
                <p>
                    Estudos demonstram que algoritmos de crédito <strong>reproduzem e amplificam</strong> 
                    desigualdades raciais e socioeconômicas:
                </p>
                <ul style="margin-top: 1rem; padding-left: 2rem; color: var(--text-gray); line-height: 1.8;">
                    <li><strong>CEPs de periferias</strong> são automaticamente marcados como "alto risco"</li>
                    <li><strong>Profissões informais</strong> são penalizadas mesmo com renda comprovada</li>
                    <li><strong>Mulheres com dependentes</strong> recebem pontuações menores que homens na mesma situação</li>
                </ul>
                <p style="margin-top: 1.5rem;">
                    Em 2019, o <strong>Apple Card</strong> foi investigado por dar limites de crédito 
                    <span style="color: var(--color-wrong);">20x menores para mulheres</span> que para seus maridos - 
                    mesmo com renda e crédito idênticos.
                </p>
                <p style="margin-top: 1rem; color: var(--accent-primary); font-weight: 600;">
                    No Brasil, não temos direito garantido de saber POR QUE um algoritmo negou nosso crédito.
                </p>
            </div>
        </div>
    `;
    
    resultDiv.classList.add('show');
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});