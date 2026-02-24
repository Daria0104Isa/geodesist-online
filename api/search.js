// api/search.js
export default async function handler(req, res) {
  // Разрешаем запросы только с вашего сайта
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { query } = req.body;
  
  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }

  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}` // ключ из переменных окружения
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: `Ты — эксперт-геодезист. Отвечай на вопросы по:
- Геодезическому оборудованию (тахеометры, нивелиры, GNSS)
- Методикам измерений
- ГОСТам и СНиПам
- Полевым работам
- Обработке данных

Отвечай кратко, по делу, максимум 3-4 предложения.`
          },
          {
            role: 'user',
            content: query
          }
        ],
        max_tokens: 500,
        temperature: 0.7
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'API Error');
    }

    res.status(200).json({ 
      answer: data.choices[0].message.content 
    });

  } catch (error) {
    console.error('DeepSeek API Error:', error);
    res.status(500).json({ error: 'Failed to get response' });
  }
}