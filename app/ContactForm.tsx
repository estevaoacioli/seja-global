'use client';

import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [done, setDone] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  if (done) {
    return (
      <p role="status" style={{ margin: 0, padding: '28px', border: '1px solid #DCD8CF', fontSize: '16px', lineHeight: 1.6 }}>
        Solicitação registrada nesta demonstração. Nenhum dado foi enviado.
      </p>
    );
  }
  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <label htmlFor="sg-nome" className="sg-sr">Nome</label>
      <input id="sg-nome" className="sg-field" type="text" name="nome" required autoComplete="name" placeholder="Nome" />
      <label htmlFor="sg-email" className="sg-sr">E-mail</label>
      <input id="sg-email" className="sg-field" type="email" name="email" required autoComplete="email" placeholder="E-mail" />
      <label htmlFor="sg-tel" className="sg-sr">Telefone ou WhatsApp</label>
      <input id="sg-tel" className="sg-field" type="tel" name="telefone" autoComplete="tel" placeholder="Telefone ou WhatsApp" />
      <label htmlFor="sg-int" className="sg-sr">Principal interesse</label>
      <select id="sg-int" className="sg-field" name="interesse" required defaultValue="">
        <option value="">O que você procura?</option>
        <option value="cursos">Cursos</option>
        <option value="diagnosticos">Diagnósticos digitais</option>
        <option value="assessoria">Assessoria estratégica</option>
        <option value="comunidade">Comunidade</option>
      </select>
      <button className="sg-btn-light" type="submit" style={{ marginTop: '8px', minHeight: '58px', padding: '0 32px', background: 'transparent', color: '#0C141F', border: '1px solid #0C141F', fontSize: '15px', letterSpacing: '0.04em', cursor: 'pointer' }}>Enviar</button>
    </form>
  );
}
