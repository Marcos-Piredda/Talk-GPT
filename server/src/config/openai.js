import OpenAI from "openai";
const { configuration, OpenAIApi } = require ("openai");

module.exports = class openai{
    static configuration(){
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
          });

          return new OpenAIApi(configuration);
    }

    static textCompletion({prompt}){
        return{
            prompt: `${prompt}`,
            model: "gpt-4o",
            messages: [
              {
                "role": "system",
                "content": [
                  {
                    "type": "text",
                    "text": "\n"
                  }
                ]
              },
              {
                "role": "user",
                "content": [
                  {
                    "type": "text",
                    "text": "Me diga um nome legal para um SITE CONSUMINDO UMA Api DO CHAT gpt"
                  }
                ]
              },
              {
                "role": "assistant",
                "content": [
                  {
                    "type": "text",
                    "text": "Claro! Aqui estão algumas sugestões de nomes para um site que utiliza a API do ChatGPT:\n\n1. **ConversaGPT**\n2. **Diálogo Digital**\n3. **GPT Interativo**\n4. **Bate-Papo AI**\n5. **ChatGenius**\n6. **GPT Conexão**\n7. **Papo Inteligente**\n8. **Interação GPT**\n9. **Conversa Criativa**\n10. **GPT Responde**\n\nEscolha um nome que melhor represente o propósito e a personalidade do seu site!"
                  }
                ]
              }
            ],
            response_format: {
              "type": "text"
            },
            temperature: 0,
            max_completion_tokens: 282,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        }
    }
}