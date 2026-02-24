// api/search.js
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }

  const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

  if (!OPENROUTER_API_KEY) {
    console.error('OpenRouter API key is not configured.');
    return res.status(500).json({ error: 'API key is not configured on the server.' });
  }

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://geodesist-online.vercel.app',
        'X-Title': 'Geodesist Online',
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-chat',
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
      throw new Error(data.error?.message || `OpenRouter API Error: ${response.status}`);
    }

    res.status(200).json({
      answer: data.choices[0].message.content
    });

  } catch (error) {
    console.error('OpenRouter API Error:', error);
    res.status(500).json({ error: 'Failed to get response from AI.' });
  }
}