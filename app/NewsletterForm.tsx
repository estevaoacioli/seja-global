'use client';

import { useState, type FormEvent } from 'react';

export default function NewsletterForm() {
  const [done, setDone] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  if (done) {
    return (
      <p role="status" style={{ flex: '1 1 380px', margin: 0, fontSize: '15px' }}>
        Inscrição registrada nesta demonstração. Nenhum dado foi enviado.
      </p>
    );
  }
  return (
    <form onSubmit={onSubmit} style={{ flex: '1 1 420px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <label htmlFor="sg-nl" className="sg-sr">E-mail</label>
      <input id="sg-nl" type="email" name="email" required autoComplete="email" placeholder="seu@email.com" style={{ flex: '1 1 220px', minHeight: '56px', padding: '0 16px', border: '1px solid #B9B4A8', background: '#FFFFFF', color: '#0C141F' }} />
      <button type="submit" style={{ minHeight: '56px', padding: '0 30px', background: '#0C141F', color: '#FAF8F4', border: 0, fontSize: '15px', letterSpacing: '0.04em', cursor: 'pointer' }}>Assinar</button>
    </form>
  );
}
