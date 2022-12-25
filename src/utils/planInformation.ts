export const planInformation = [
  {
    title: 'Beginner',
    monthlyPrice: 29,
    yearlyPrice: 328,
    cardIsActive: false,
    features: [
      { name: 'Transcrição de Áudio Assíncrono', timeInMinutes: 120, extraMinutePrice: 0.20 },
      { name: 'Transcrição de Áudio em tempo real', timeInMinutes: 90, extraMinutePrice: 0.40 },
      { name: 'Identificação de Idiomas em áudios', timeInMinutes: 200, extraMinutePrice: 0.05 },
      { name: 'Análise de sentimento a partir do áudio', timeInMinutes: 120, extraMinutePrice: 0.40 },
    ]
  },
  {
    title: 'Business',
    monthlyPrice: 44,
    yearlyPrice: 499,
    cardIsActive: true,
    features: [
      { name: 'Transcrição de Áudio Assíncrono', timeInMinutes: 200, extraMinutePrice: 0.15 },
      { name: 'Transcrição de Áudio em tempo real', timeInMinutes: 120, extraMinutePrice: 0.40 },
      { name: 'Identificação de Idiomas em áudios', timeInMinutes: 500, extraMinutePrice: 0.03 },
      { name: 'Análise de sentimento a partir do áudio', timeInMinutes: 200, extraMinutePrice: 0.35 },
    ]
  },
  {
    title: 'Enterprise',
    cardIsActive: false,
    features: [
      { name: 'Transcrição de Áudio Assíncrono', timeInMinutes: '+200' },
      { name: 'Transcrição de Áudio em tempo real', timeInMinutes: '+120' },
      { name: 'Identificação de Idiomas em áudios', timeInMinutes: '+500' },
      { name: 'Análise de sentimento a partir do áudio', timeInMinutes: '+200' },
      { name: 'Preços especiais para grandes volumes' },
      { name: 'Prioridade no suporte técnico' },
      { name: 'Gestor de conta dedicado' },
    ]
  },
]