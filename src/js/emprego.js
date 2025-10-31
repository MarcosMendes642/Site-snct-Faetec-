// Base de dados de profissões
const jobsData = {
    // Risco Crítico (85-95%)
    'motorista': { risk: 90, timeline: '5-10 anos', category: 'critico' },
    'caminhoneiro': { risk: 92, timeline: '5-10 anos', category: 'critico' },
    'caixa': { risk: 88, timeline: '3-7 anos', category: 'critico' },
    'operador de telemarketing': { risk: 95, timeline: '2-5 anos', category: 'critico' },
    'atendente': { risk: 85, timeline: '3-7 anos', category: 'critico' },
    'operador de maquina': { risk: 87, timeline: '10-15 anos', category: 'critico' },
    
    // Risco Alto (60-84%)
    'contador': { risk: 75, timeline: '10-15 anos', category: 'alto' },
    'tradutor': { risk: 70, timeline: '5-10 anos', category: 'alto' },
    'analista de dados': { risk: 65, timeline: '10-15 anos', category: 'alto' },
    'jornalista': { risk: 68, timeline: '10-15 anos', category: 'alto' },
    'paralegal': { risk: 72, timeline: '10-15 anos', category: 'alto' },
    
    // Risco Médio (35-59%)
    'advogado': { risk: 45, timeline: '15-20 anos', category: 'medio' },
    'programador': { risk: 40, timeline: '15-20 anos', category: 'medio' },
    'designer': { risk: 42, timeline: '15-20 anos', category: 'medio' },
    'arquiteto': { risk: 38, timeline: '15-20 anos', category: 'medio' },
    'engenheiro': { risk: 48, timeline: '15-20 anos', category: 'medio' },
    
    // Risco Baixo (0-34%)
    'professor': { risk: 25, timeline: '20+ anos', category: 'baixo' },
    'psicologo': { risk: 15, timeline: '20+ anos', category: 'baixo' },
    'enfermeiro': { risk: 20, timeline: '20+ anos', category: 'baixo' },
    'medico': { risk: 18, timeline: '20+ anos', category: 'baixo' },
    'artista': { risk: 22, timeline: '20+ anos', category: 'baixo' },
    'terapeuta': { risk: 12, timeline: '20+ anos', category: 'baixo' }
};

const descriptions = {
    'critico': 'ALERTA MÁXIMO: Sua profissão está entre as mais ameaçadas pela automação. A transformação já começou e se acelera rapidamente.',
    'alto': 'ATENÇÃO: Partes significativas do seu trabalho serão automatizadas. Adaptação será necessária.',
    'medio': 'VIGILÂNCIA: Algumas tarefas serão automatizadas, mas habilidades humanas ainda serão essenciais. Desenvolva competências complementares.',
    'baixo': 'RELATIVA SEGURANÇA: Sua profissão exige habilidades distintivamente humanas difíceis de automatizar. Mas mantenha-se atualizado.'
};

const skills = {
    'critico': ['Aprender programação básica', 'Desenvolver pensamento crítico', 'Buscar requalificação profissional', 'Considerar transição de carreira'],
    'alto': ['Dominar ferramentas de IA', 'Desenvolver habilidades interpessoais', 'Especializar-se em nichos complexos', 'Aprender análise estratégica'],
    'medio': ['Usar IA como ferramenta multiplicadora', 'Focar em criatividade e inovação', 'Desenvolver expertise única', 'Manter aprendizado contínuo'],
    'baixo': ['Combinar habilidades técnicas com humanas', 'Manter empatia e inteligência emocional', 'Atualizar conhecimentos constantemente', 'Explorar intersecção com tecnologia']
};

// Clique no botão
document.getElementById('checkJobBtn').addEventListener('click', function() {
    const input = document.getElementById('jobInput').value.toLowerCase().trim();
    const resultDiv = document.getElementById('jobResult');
    
    if (!input) {
        alert('Por favor, digite uma profissão!');
        return;
    }
    
    // Buscar profissão na base
    let jobInfo = jobsData[input];
    
    // Se não encontrar exato, tentar busca parcial
    if (!jobInfo) {
        for (let job in jobsData) {
            if (input.includes(job) || job.includes(input)) {
                jobInfo = jobsData[job];
                break;
            }
        }
    }
    
    // Se ainda não encontrar, mostrar mensagem
    if (!jobInfo) {
        resultDiv.innerHTML = `
            <div class="risk-card" style="border-color: rgba(255, 193, 7, 0.5);">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🤔</div>
                <div class="risk-level" style="color: #FFD700;">PROFISSÃO NÃO ENCONTRADA</div>
                <div class="risk-description" style="margin-top: 2rem;">
                    Desculpe, ainda não temos dados sobre "<strong>${input}</strong>" em nossa base.
                </div>
                
                <div class="risk-timeline">
                    <h4>💡 Sugestões</h4>
                    <p>Tente pesquisar por:</p>
                    <ul style="text-align: left; margin-top: 1rem; padding-left: 1.5rem; color: var(--text-gray);">
                        <li>Nome mais genérico (ex: "programador" ao invés de "programador full stack")</li>
                        <li>Variações do nome (ex: "advogado", "médico", "professor")</li>
                        <li>Categoria profissional (ex: "contador", "engenheiro")</li>
                    </ul>
                </div>
                
                <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(65, 54, 195, 0.15); border-radius: 12px; text-align: left;">
                    <h4 style="color: var(--accent-primary); margin-bottom: 1rem;">📊 Profissões Disponíveis:</h4>
                    <p style="color: var(--text-gray); line-height: 1.8;">
                        Motorista, Caminhoneiro, Caixa, Telemarketing, Contador, Tradutor, Jornalista, 
                        Advogado, Programador, Designer, Engenheiro, Professor, Psicólogo, Médico, Enfermeiro, entre outras.
                    </p>
                </div>
            </div>
        `;
        
        resultDiv.classList.add('show');
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        return;
    }
    
    // Gerar resultado normal
    const riskClass = `risk-${jobInfo.category}`;
    const bgClass = `bg-${jobInfo.category}`;
    
    resultDiv.innerHTML = `
        <div class="risk-card">
            <div class="risk-level ${riskClass}">NÍVEL DE RISCO: ${jobInfo.category.toUpperCase()}</div>
            <div class="risk-percentage ${riskClass}">${jobInfo.risk}%</div>
            <div class="risk-bar-container">
                <div class="risk-bar ${bgClass}" style="width: 0%"></div>
            </div>
            <div class="risk-description">${descriptions[jobInfo.category]}</div>
            
            <div class="risk-timeline">
                <h4>⏱️ Timeline Estimada</h4>
                <p>Impacto significativo esperado em: <strong>${jobInfo.timeline}</strong></p>
                <p style="margin-top: 1rem; color: var(--text-gray);">Esta estimativa considera a velocidade atual de desenvolvimento tecnológico, adoção pelo mercado, e barreiras regulatórias.</p>
            </div>
            
            <div class="risk-skills">
                <h4>💡 Habilidades para Desenvolver</h4>
                <ul>
                    ${skills[jobInfo.category].map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    resultDiv.classList.add('show');
    
    // Animar a barra de risco
    setTimeout(() => {
        const riskBar = resultDiv.querySelector('.risk-bar');
        riskBar.style.width = jobInfo.risk + '%';
    }, 100);
    
    // Scroll suave até o resultado
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// Pressionar ENTER faz o mesmo que clicar no botão
document.getElementById('jobInput')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('checkJobBtn').click();
    }
});
