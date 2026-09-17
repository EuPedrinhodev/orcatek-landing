import React from "react";
import "./landing.css";

const WHATSAPP =
  "https://wa.me/5511963070342?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20OrcaTek";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=ORCATEK%2C%20Carapicu%C3%ADba%2C%20SP";

function registrarLead() {
  if (
    typeof window !== "undefined" &&
    typeof (window as any).fbq === "function"
  ) {
    (window as any).fbq("track", "Lead");
  }
}

function LandingPage() {
  return (
    <div className="landing">
      {/* =====================================================
NAVBAR
===================================================== */}

      <header className="landing-header">
        <div className="landing-container nav-content">
          <a href="#" className="logo">
            ORCA<span>TEK</span>
          </a>

          <nav className="nav-links">
            <a href="#recursos">Recursos</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#avaliacoes">Avaliações</a>
            <a href="#planos">Planos</a>
            <a href="#migracao">Migração</a>
          </nav>

          <div className="nav-actions">
            <a href="/app/" className="btn-ghost">
              Acessar OrçaTek
            </a>

            <a href="#planos" className="btn-primary">
              Começar teste grátis
            </a>
          </div>
        </div>
      </header>
      <main>
        {/* =====================================================
        HERO
    ===================================================== */}

        <section className="hero">
          <div className="hero-background-glow hero-glow-one"></div>
          <div className="hero-background-glow hero-glow-two"></div>

          <div className="landing-container hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="hero-badge-dot"></span>
                Sistema de gerenciamento para oficinas de carros e motos
              </div>

              <h1>
                Sua oficina mais organizada,
                <span> produtiva e lucrativa.</span>
              </h1>

              <p className="hero-description">
                Controle orçamentos, clientes, veículos, estoque, financeiro e
                agenda em um único sistema.
              </p>

              <div className="hero-actions">
                <a href="#planos" className="btn-primary btn-large">
                  Começar teste grátis
                  <span>→</span>
                </a>

                <a href="/app/" className="btn-ghost btn-large">
                  Acessar OrçaTek
                </a>
              </div>

              <div className="hero-benefits">
                <span>
                  <b>✓</b> Teste grátis
                </span>

                <span>
                  <b>✓</b> Sem cartão de crédito
                </span>

                <span>
                  <b>✓</b> Fácil de usar
                </span>

                <span>
                  <b>✓</b> Acesso online
                </span>
              </div>

              <div className="hero-free-trial">
                <strong>Comece seu teste grátis</strong>

                <span>Sem cartão de crédito e sem compromisso.</span>
              </div>
            </div>

            {/* =================================================
            DASHBOARD
        ================================================= */}

            <div className="dashboard-wrapper">
              <div className="dashboard-glow"></div>

              <div className="dashboard">
                <div className="dashboard-sidebar">
                  <div className="dashboard-logo">
                    ORCA<span>TEK</span>
                  </div>

                  <div className="sidebar-item active">
                    <span>▦</span>
                    Dashboard
                  </div>

                  <div className="sidebar-item">
                    <span>▤</span>
                    Orçamentos
                  </div>

                  <div className="sidebar-item">
                    <span>♙</span>
                    Clientes
                  </div>

                  <div className="sidebar-item">
                    <span>▱</span>
                    Veículos
                  </div>

                  <div className="sidebar-item">
                    <span>▥</span>
                    Estoque
                  </div>

                  <div className="sidebar-item">
                    <span>R$</span>
                    Financeiro
                  </div>

                  <div className="sidebar-item">
                    <span>◷</span>
                    Agenda
                  </div>
                </div>

                <div className="dashboard-main">
                  <div className="dashboard-top">
                    <div>
                      <small>Painel operacional</small>
                      <h3>Dashboard</h3>
                    </div>

                    <div className="dashboard-user">Oficina</div>
                  </div>

                  <div className="stats-grid">
                    <div className="stat-card">
                      <small>Faturamento do mês</small>

                      <strong>R$ 28.450</strong>

                      <span>↑ 12,5%</span>
                    </div>

                    <div className="stat-card">
                      <small>Orçamentos abertos</small>

                      <strong>24</strong>

                      <span>Em andamento</span>
                    </div>

                    <div className="stat-card">
                      <small>Clientes ativos</small>

                      <strong>186</strong>

                      <span>+18 este mês</span>
                    </div>

                    <div className="stat-card">
                      <small>Conversão</small>

                      <strong>68%</strong>

                      <span>Excelente</span>
                    </div>
                  </div>

                  <div className="dashboard-section">
                    <div className="section-title">
                      <strong>Últimos orçamentos</strong>

                      <span>Ver todos</span>
                    </div>

                    <div className="fake-table">
                      <div className="fake-row fake-header">
                        <span>Cliente</span>
                        <span>Veículo</span>
                        <span>Valor</span>
                        <span>Status</span>
                      </div>

                      <div className="fake-row">
                        <span>João Silva</span>

                        <span>Honda Civic</span>

                        <span>R$ 2.450</span>

                        <b>Aprovado</b>
                      </div>

                      <div className="fake-row">
                        <span>Marcos Oliveira</span>

                        <span>Toyota Corolla</span>

                        <span>R$ 1.870</span>

                        <b>Aguardando</b>
                      </div>

                      <div className="fake-row">
                        <span>Fernanda Costa</span>

                        <span>VW T-Cross</span>

                        <span>R$ 3.240</span>

                        <b>Aprovado</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
              CELULAR
          ================================================= */}

              <div className="phone-mockup">
                <div className="phone-notch"></div>

                <div className="phone-screen">
                  <div className="phone-header">
                    <div>
                      <small>ORCATEK</small>
                      <strong>Dashboard</strong>
                    </div>

                    <div className="phone-avatar">O</div>
                  </div>

                  <div className="phone-welcome">
                    <small>Olá, oficina 👋</small>

                    <strong>Resumo do dia</strong>
                  </div>

                  <div className="phone-stats">
                    <div className="phone-stat">
                      <small>Faturamento</small>

                      <strong>R$ 4.850</strong>

                      <span>↑ 12%</span>
                    </div>

                    <div className="phone-stat">
                      <small>Orçamentos</small>

                      <strong>12</strong>

                      <span>abertos</span>
                    </div>
                  </div>

                  <div className="phone-card">
                    <div className="phone-card-title">
                      <strong>Próximos serviços</strong>

                      <span>Ver todos</span>
                    </div>

                    <div className="phone-service">
                      <div className="phone-service-icon">🚗</div>

                      <div>
                        <strong>Honda Civic</strong>

                        <small>João Silva</small>
                      </div>

                      <b>09:30</b>
                    </div>

                    <div className="phone-service">
                      <div className="phone-service-icon">🏍️</div>

                      <div>
                        <strong>Honda CG 160</strong>

                        <small>Marcos Santos</small>
                      </div>

                      <b>11:00</b>
                    </div>

                    <div className="phone-service">
                      <div className="phone-service-icon">🚙</div>

                      <div>
                        <strong>T-Cross</strong>

                        <small>Fernanda Costa</small>
                      </div>

                      <b>14:30</b>
                    </div>
                  </div>

                  <div className="phone-bottom-nav">
                    <span className="active">⌂</span>
                    <span>▤</span>
                    <span>◷</span>
                    <span>♙</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
        DISPOSITIVOS
    ===================================================== */}

        <section className="device-section">
          <div className="landing-container">
            <div className="section-heading centered">
              <div className="section-label">ACESSO DE QUALQUER LUGAR</div>

              <h2>
                Sua oficina na palma
                <br />
                da sua mão
              </h2>

              <p>
                O OrcaTek funciona no computador, notebook, tablet e celular.
                Tenha sua oficina na palma da mão e acompanhe sua operação de
                qualquer lugar.
              </p>
            </div>

            <div className="devices-grid">
              <div className="device-card">
                <div className="device-icon">▣</div>

                <strong>COMPUTADOR</strong>

                <span>Tenha uma visão completa da sua oficina.</span>
              </div>

              <div className="device-card">
                <div className="device-icon">▱</div>

                <strong>NOTEBOOK</strong>

                <span>Trabalhe de onde estiver.</span>
              </div>

              <div className="device-card">
                <div className="device-icon">▯</div>

                <strong>TABLET</strong>

                <span>Consulte informações durante o atendimento.</span>
              </div>

              <div className="device-card">
                <div className="device-icon">▥</div>

                <strong>CELULAR</strong>

                <span>Acompanhe sua oficina pelo celular.</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
        RECURSOS
    ===================================================== */}

        <section className="section" id="recursos">
          <div className="landing-container">
            <div className="section-heading">
              <div className="section-label">TUDO EM UM SÓ LUGAR</div>

              <h2>
                Tenha o controle completo
                <br />
                da sua oficina
              </h2>

              <p>
                O OrcaTek reúne as principais ferramentas que sua oficina
                precisa para trabalhar de forma profissional, organizada e
                eficiente.
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">▤</div>

                <h3>Orçamentos</h3>

                <p>
                  Crie, envie e acompanhe seus orçamentos com facilidade,
                  aumentando o controle sobre cada serviço.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">♙</div>

                <h3>Clientes</h3>

                <p>
                  Tenha todos os dados e o histórico dos seus clientes
                  organizados em um só lugar.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">▱</div>

                <h3>Veículos</h3>

                <p>
                  Controle carros e motos atendidos e acompanhe todo o histórico
                  de serviços realizados.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">▥</div>

                <h3>Estoque</h3>

                <p>
                  Saiba o que entrou, o que saiu e quando é necessário repor
                  produtos e peças.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">R$</div>

                <h3>Financeiro</h3>

                <p>
                  Acompanhe receitas, despesas e resultados para entender melhor
                  o desempenho da sua oficina.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">◷</div>

                <h3>Agenda</h3>

                <p>
                  Organize serviços, compromissos e horários sem perder
                  oportunidades de atendimento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
        COMO FUNCIONA
    ===================================================== */}

        <section className="section section-dark" id="como-funciona">
          <div className="landing-container">
            <div className="section-heading centered">
              <div className="section-label">SIMPLES E PRÁTICO</div>

              <h2>
                Comece a organizar sua oficina
                <br />
                em poucos minutos
              </h2>

              <p>
                Tenha uma gestão mais organizada sem complicar a rotina da sua
                oficina.
              </p>
            </div>

            <div className="steps">
              <div className="step">
                <div className="step-number">01</div>

                <h3>Cadastre sua oficina</h3>

                <p>Crie sua conta e configure os dados da sua oficina.</p>
              </div>

              <div className="step-line"></div>

              <div className="step">
                <div className="step-number">02</div>

                <h3>Cadastre seus clientes</h3>

                <p>
                  Organize clientes, carros, motos e histórico de serviços em um
                  único lugar.
                </p>
              </div>

              <div className="step-line"></div>

              <div className="step">
                <div className="step-number">03</div>

                <h3>Comece a trabalhar</h3>

                <p>
                  Controle sua operação e acompanhe os resultados da sua
                  oficina.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
        AVALIAÇÕES GOOGLE
    ===================================================== */}

        <section className="section reviews-section" id="avaliacoes">
          <div className="landing-container">
            <div className="section-heading centered">
              <div className="section-label">AVALIAÇÕES NO GOOGLE</div>

              <h2>
                Quem conhece o OrcaTek,
                <br />
                recomenda.
              </h2>

              <p>Veja a avaliação de clientes que já conhecem o OrcaTek.</p>
            </div>

            <div className="reviews-summary">
              <div className="google-rating">
                <div className="google-rating-stars">★★★★★</div>

                <strong>5,0</strong>

                <span>no Google</span>
              </div>

              <div className="google-rating-text">
                <strong>Excelente avaliação no Google</strong>

                <p>
                  O OrcaTek possui atualmente
                  <strong> 13 avaliações </strong>
                  no Google, com nota máxima de
                  <strong> 5,0 estrelas.</strong>
                </p>

                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="google-reviews-link"
                >
                  Ver avaliações no Google →
                </a>
              </div>
            </div>

            <div className="reviews-grid">
              <div className="review-card">
                <div className="review-card-top">
                  <div className="review-avatar">★</div>

                  <div>
                    <strong>Avaliação no Google</strong>

                    <span>5 estrelas</span>
                  </div>
                </div>

                <div className="review-stars">★★★★★</div>

                <p>
                  Confira esta e outras avaliações reais diretamente no perfil
                  do OrcaTek no Google.
                </p>

                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="review-google-link"
                >
                  Ver no Google →
                </a>
              </div>

              <div className="review-card">
                <div className="review-card-top">
                  <div className="review-avatar">★</div>

                  <div>
                    <strong>Clientes OrcaTek</strong>

                    <span>Avaliação no Google</span>
                  </div>
                </div>

                <div className="review-stars">★★★★★</div>

                <p>
                  A nota máxima do OrcaTek no Google mostra a satisfação de quem
                  já conhece nosso trabalho.
                </p>

                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="review-google-link"
                >
                  Ver avaliações →
                </a>
              </div>

              <div className="review-card">
                <div className="review-card-top">
                  <div className="review-avatar">★</div>

                  <div>
                    <strong>5,0 estrelas</strong>

                    <span>Google</span>
                  </div>
                </div>

                <div className="review-stars">★★★★★</div>

                <p>
                  Quer conhecer as opiniões completas? Acesse nosso perfil e
                  veja as avaliações diretamente no Google.
                </p>

                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="review-google-link"
                >
                  Conferir no Google →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
        MIGRAÇÃO
    ===================================================== */}

        <section className="section" id="migracao">
          <div className="landing-container migration">
            <div className="migration-content">
              <div className="section-label">ESTÁ VINDO DE OUTRO SISTEMA?</div>

              <h2>
                Não precisa começar
                <br />
                tudo do zero.
              </h2>

              <p>
                Se sua oficina já possui clientes, veículos, produtos ou outros
                dados em outro sistema, podemos ajudar na migração.
              </p>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                onClick={registrarLead}
              >
                Falar sobre migração
              </a>
            </div>

            <div className="migration-card">
              <div className="migration-icon">↗</div>

              <h3>Migração de dados</h3>

              <p>
                Traga as informações da sua oficina para o OrcaTek e continue
                seu trabalho sem perder seu histórico.
              </p>

              <div className="migration-items">
                <span>✓ Clientes</span>
                <span>✓ Veículos</span>
                <span>✓ Produtos</span>
                <span>✓ Histórico</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
        PLANOS
    ===================================================== */}

        <section className="section pricing-section" id="planos">
          <div className="landing-container">
            <div className="section-heading centered">
              <div className="section-label">PLANOS</div>

              <h2>
                Escolha o plano ideal
                <br />
                para sua oficina
              </h2>

              <p>
                Comece grátis e escolha o plano que melhor atende às
                necessidades da sua oficina.
              </p>
            </div>

            <div className="pricing-trial-note">
              <strong>🎉 Experimente o OrcaTek grátis</strong>

              <span>
                Não precisa cadastrar cartão de crédito e não tem compromisso.
              </span>
            </div>

            <div className="pricing-grid">
              {/* BÁSICO */}

              <div className="pricing-card">
                <div className="pricing-name">Básico</div>

                <p className="pricing-description">
                  Para oficinas que querem organizar sua operação.
                </p>

                <div className="price">
                  <small>R$</small>
                  100
                  <span>/mês</span>
                </div>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline full-width"
                  onClick={registrarLead}
                >
                  Começar teste grátis
                </a>

                <div className="pricing-divider"></div>

                <strong>Inclui:</strong>

                <ul>
                  <li>✓ Orçamentos</li>
                  <li>✓ Cadastro de clientes</li>
                  <li>✓ Cadastro de veículos</li>
                  <li>✓ Agenda</li>
                  <li>✓ Ordens de serviço</li>
                </ul>
              </div>

              {/* PRO */}

              <div className="pricing-card">
                <div className="pricing-name">Pro</div>

                <p className="pricing-description">
                  Para oficinas que querem mais controle da operação.
                </p>

                <div className="price">
                  <small>R$</small>
                  150
                  <span>/mês</span>
                </div>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline full-width"
                  onClick={registrarLead}
                >
                  Começar teste grátis
                </a>

                <div className="pricing-divider"></div>

                <strong>Inclui tudo do Básico +:</strong>

                <ul>
                  <li>✓ Controle de estoque</li>
                  <li>✓ Movimentações de estoque</li>
                  <li>✓ Estoque mínimo</li>
                  <li>✓ Controle de produtos</li>
                  <li>✓ Mais controle operacional</li>
                </ul>
              </div>

              {/* TOTAL */}

              <div className="pricing-card pricing-featured">
                <div className="popular">MAIS RECOMENDADO</div>

                <div className="pricing-name">Total</div>

                <p className="pricing-description">
                  Para oficinas que querem controle completo do negócio.
                </p>

                <div className="price">
                  <small>R$</small>
                  200
                  <span>/mês</span>
                </div>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary full-width"
                  onClick={registrarLead}
                >
                  Começar teste grátis
                </a>

                <div className="pricing-divider"></div>

                <strong>Inclui tudo do Pro +:</strong>

                <ul>
                  <li>✓ Financeiro</li>
                  <li>✓ Receitas e despesas</li>
                  <li>✓ Controle financeiro</li>
                  <li>✓ Visão completa da oficina</li>
                  <li>✓ Todos os módulos</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
        CTA FINAL
    ===================================================== */}

        <section className="final-cta">
          <div className="final-cta-glow"></div>

          <div className="landing-container">
            <div className="cta-box">
              <div className="cta-content">
                <div className="section-label">TESTE GRÁTIS</div>

                <h2>
                  Pronto para ter mais
                  <br />
                  controle da sua oficina?
                </h2>

                <p>
                  Experimente o OrcaTek gratuitamente e veja como ele pode
                  ajudar sua oficina a trabalhar de forma mais organizada.
                  <strong> Sem cartão de crédito e sem compromisso.</strong>
                </p>
              </div>

              <div className="cta-actions">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-large"
                  onClick={registrarLead}
                >
                  Começar teste grátis
                  <span>→</span>
                </a>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-final-whatsapp"
                  onClick={registrarLead}
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* =====================================================
      FOOTER
  ===================================================== */}
      <footer className="footer">
        <div className="landing-container footer-content">
          <div className="footer-brand">
            <a href="#" className="logo">
              ORCA<span>TEK</span>
            </a>

            <p>Sistema de gerenciamento para oficinas de carros e motos.</p>
          </div>

          <div className="footer-links">
            <a href="#recursos">Recursos</a>

            <a href="#como-funciona">Como funciona</a>

            <a href="#avaliacoes">Avaliações</a>

            <a href="#planos">Planos</a>

            <a href="#migracao">Migração</a>
          </div>

          <div className="footer-copy">
            © {new Date().getFullYear()} OrcaTek. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
