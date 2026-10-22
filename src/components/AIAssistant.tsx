import { useState, useRef, useEffect } from 'react'

interface Message {
  id: number
  text: string
  isUser: boolean
}

// База знаний AI
const KNOWLEDGE_BASE: Record<string, string[]> = {
  'привет': ['Приветствую! ✨ Я — Celestia AI, ваш космический консультант. Спросите меня о духах, знаках Зодиака или подберу аромат для вас!'],
  'здравствуй': ['Здравствуйте!  Готов помочь вам найти идеальный аромат по звёздам. Что вас интересует?'],
  
  'духи': [
    'У нас есть 14 нишевых ароматов, распределённых по 6 планетарным энергиям. Каждая планета отвечает за разные аспекты личности. 🌙',
    'Наши духи подобраны так, чтобы резонировать с вашей натальной картой. Например, Baccarat Rouge 540 идеально подходит для Солнца во Льве! ✨'
  ],
  
  'аромат': ['Расскажите о вашем знаке Зодиака, и я подберу идеальный аромат! Например, Овнам подходят пряные и динамичные запахи с нотами перца и кедра. 🔥'],
  
  'знак': ['Каждый знак Зодиака имеет свои предпочтения в ароматах. Огненные знаки (Овен, Лев, Стрелец) любят пряные запахи, Водные (Рак, Скорпион, Рыбы) — морские и цветочные. 💧'],
  
  'овен': ['Овен ♈ — огненный знак, управляемый Марсом. Вам подходят динамичные, пряные ароматы с нотами перца, имбиря и кедра. Попробуйте Oud Wood от Tom Ford! 🔥'],
  'телец': ['Телец ♉ — земной знак под управлением Венеры. Вы цените роскошь и чувственность. Идеальны ароматы с розой, ванилью и сандалом. Mon Guerlain — ваш выбор! '],
  'близнецы': ['Близнецы ♊ — воздушный знак Меркурия. Вам подходят лёгкие, свежие ароматы с цитрусами и зелёным чаем. Chance Eau Tendre от Chanel — идеально! 🍋'],
  'рак': ['Рак ♋ — водный знак Луны. Вы эмоциональны и интуитивны. Выбирайте нежные, уютные ароматы с жасмином и белым мускусом. La Vie Est Belle — ваш аромат! 🌙'],
  'лев': ['Лев ♌ — огненный знак Солнца. Вы рождены сиять! Вам подходят царственные ароматы с амброй, шафраном и удом. Baccarat Rouge 540 создан для вас! ️'],
  'дева': ['Дева ♍ — земной знак Меркурия. Вы цените чистоту и элегантность. Подходят свежие, аккуратные ароматы с лавандой и ирисом. Terre d\'Hermès — ваш выбор! 🌿'],
  'весы': ['Весы ♎ — воздушный знак Венеры. Вы эстеты и романтики. Идеальны гармоничные цветочные композиции с розой и фиалкой. J\'adore от Dior — для вас! ⚖️'],
  'скорпион': ['Скорпион ♏ — водный знак Плутона. Вы загадочны и магнетичны. Вам подходят тёмные, чувственные ароматы с удом и пачули. Black Orchid — ваш аромат! 🖤'],
  'стрелец': ['Стрелец ♐ — огненный знак Юпитера. Вы свободолюбивы и оптимистичны. Подходят экзотические, пряные ароматы. Tobacco Vanille — идеален! '],
  'козерог': ['Козерог ♑ — земной знак Сатурна. Вы амбициозны и классичны. Выбирайте строгие, древесные ароматы с ветивером и кожей. Encre Noire — ваш выбор! ⛰️'],
  'водолей': ['Водолей  — воздушный знак Урана. Вы уникальны и независимы. Вам подходят необычные, футуристичные ароматы. Rose 31 от Le Labo — для вас! '],
  'рыбы': ['Рыбы ♓ — водный знак Нептуна. Вы мечтательны и артистичны. Идеальны эфирные, водянистые ароматы с амброй и лотосом. Mon Guerlain — ваш аромат! 🌊'],
  
  'планет': ['В нашей системе 6 планетарных энергий: Солнце (идентичность), Луна (эмоции), Венера (любовь), Марс (страсть), Юпитер (удача), Сатурн (мудрость). Каждая планета управляет определёнными ароматами. '],
  
  'солнц': ['Солнце ☉ управляет вашей основной идентичностью и эго. Солнечные ароматы усиливают уверенность и магнетизм. Попробуйте Baccarat Rouge 540 или Chance Eau Tendre! ☀️'],
  
  'лун': ['Луна ☽ governs ваши эмоции и интуицию. Лунные ароматы успокаивают и гармонизируют. La Vie Est Belle и Mon Guerlain — идеальные лунные ароматы! 🌙'],
  
  'венер': ['Венера ♀ — планета любви и красоты. Венерианские ароматы усиливают вашу привлекательность. Coco Mademoiselle, Rose 31 и J\'adore — венерианская тройка! 💕'],
  
  'марс': ['Марс  — планета страсти и силы. Марсианские ароматы зажигают желание. Oud Wood и Black Orchid от Tom Ford — чистая энергия Марса! 🔥'],
  
  'юпитер': ['Юпитер ♃ — планета изобилия и удачи. Юпитерианские ароматы открывают двери к процветанию. Grand Soir и Tobacco Vanille — ароматы изобилия! 💰'],
  
  'сатурн': ['Сатурн  — планета мудрости и структуры. Сатурнианские ароматы заземляют и укрепляют. Terre d\'Hermès и Encre Noire — ароматы мудрости! ️'],
  
  'подобрать': ['Чтобы подобрать аромат, мне нужно знать ваш знак Зодиака. Напишите ваш знак (например, "Лев" или "Скорпион"), и я дам персональную рекомендацию! ✨'],
  
  'рекоменд': ['На основе вашего знака Зодиака, я рекомендую обратить внимание на ароматы, которые резонируют с вашей планетарной энергией. Расскажите ваш знак! 🌟'],
  
  'купить': ['Вы можете приобрести пробник (2 мл) или полноразмерный флакон. Пробники идеально подходят для тестирования аромата перед покупкой большого флакона! ️'],
  
  'пробник': ['Пробники — это миниатюры 2 мл, которые позволяют протестировать аромат в течение нескольких дней. Это идеальный способ найти "ваш" запах без риска! 💝'],
  
  'спасибо': ['Пожалуйста!  Если у вас есть ещё вопросы о духах или астрологии — я всегда здесь. Звёзды ведут, вы решаете! '],
  
  'пока': ['До свидания! Пусть звёзды освещают ваш путь к идеальному аромату! ✨🌙'],
}

const DEFAULT_RESPONSES = [
  'Интересный вопрос! 🤔 В контексте астрологии и парфюмерии, каждый аромат несёт определённую вибрацию. Расскажите больше о вашем знаке Зодиака, и я дам точную рекомендацию!',
  'Хм, давайте подумаем... 🌟 Каждый человек уникален, как и его натальная карта. Если вы расскажете мне ваш знак Зодиака, я смогу подобрать идеальный аромат!',
  'Отличный вопрос! ✨ Наши ароматы подобраны так, чтобы резонировать с планетарными энергиями. Какой аспект астрологии вас интересует больше всего?',
]

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Приветствую! ✨ Я — Celestia AI, ваш космический консультант по ароматам и астрологии. Спросите меня о духах, знаках Зодиака, или напишите ваш знак для персональной рекомендации!',
      isUser: false,
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const findResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase().trim()
    
    // Ищем совпадение в базе знаний
    for (const [key, responses] of Object.entries(KNOWLEDGE_BASE)) {
      if (lowerMessage.includes(key)) {
        return responses[Math.floor(Math.random() * responses.length)]
      }
    }
    
    // Если не нашли — случайный ответ по умолчанию
    return DEFAULT_RESPONSES[Math.floor(Math.random() * DEFAULT_RESPONSES.length)]
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      isUser: true,
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Имитация "печатания" AI
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        text: findResponse(input),
        isUser: false,
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Кнопка открытия чата */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #D4AF37 0%, #AA8C2C 100%)',
          boxShadow: '0 4px 20px rgba(212, 175, 55, 0.4)',
        }}
      >
        <span className="text-2xl">{isOpen ? '' : '🤖'}</span>
      </button>

      {/* Окно чата */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 w-80 h-96 rounded-2xl flex flex-col overflow-hidden"
          style={{
            background: 'rgba(26, 27, 46, 0.95)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* Заголовок */}
          <div
            className="px-4 py-3 flex items-center gap-3"
            style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}
          >
            <div className="text-2xl">🤖</div>
            <div>
              <div className="font-display text-sm" style={{ color: '#D4AF37', fontFamily: 'Cinzel, serif' }}>
                Celestia AI
              </div>
              <div className="text-xs" style={{ color: '#888' }}>Космический консультант</div>
            </div>
          </div>

          {/* Сообщения */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="max-w-[85%] px-3 py-2 rounded-2xl text-sm"
                  style={{
                    background: msg.isUser ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)',
                    color: msg.isUser ? '#0B0C15' : '#F5F5F7',
                    borderBottomRightRadius: msg.isUser ? '4px' : '20px',
                    borderBottomLeftRadius: msg.isUser ? '20px' : '4px',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div
                  className="px-3 py-2 rounded-2xl text-sm"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#888',
                  }}
                >
                  <span className="animate-pulse">●●●</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Ввод */}
          <div
            className="p-3 flex gap-2"
            style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Спросите о духах или знаке Зодиака..."
              className="flex-1 px-3 py-2 rounded-lg text-sm outline-none"
              style={{
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                color: '#F5F5F7',
              }}
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
              style={{
                background: '#D4AF37',
                color: '#0B0C15',
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  )
}