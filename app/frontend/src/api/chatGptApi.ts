import { AskResponse, ChatRequest, ChatResponse } from "./models";


export async function chatGptApi(options: ChatRequest, indexNs: string, indexType: string): Promise<AskResponse> {
  const response = await fetch('/chat', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      indexType: indexType,
      indexNs: indexNs,
      postBody: {
        values: [
          {
            recordId: 0,
            data: {
              history: options.history,
              approach: 'rrr',
              overrides: {
                semantic_ranker: options.overrides?.semanticRanker,
                semantic_captions: options.overrides?.semanticCaptions,
                top: options.overrides?.top,
                temperature: options.overrides?.temperature,
                prompt_template: options.overrides?.promptTemplate,
                prompt_template_prefix: options.overrides?.promptTemplatePrefix,
                prompt_template_suffix: options.overrides?.promptTemplateSuffix,
                suggest_followup_questions: options.overrides?.suggestFollowupQuestions,
                embeddingModelType: options.overrides?.embeddingModelType,
              }
            }
          }
        ]
      }
    })
  });

  const parsedResponse: ChatResponse = await response.json();
  if (response.status > 299 || !response.ok) {
    throw Error(parsedResponse.values[0].data.error || "Unknown error");
  }
  return parsedResponse.values[0].data;
}
