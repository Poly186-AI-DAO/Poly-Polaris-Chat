import { AskRequest, AskResponse, ChatResponse } from "./models";


export async function askTaskAgentApi(options: AskRequest): Promise<AskResponse> {
  const response = await fetch('/askTaskAgent', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      postBody: {
        values: [
          {
            recordId: 0,
            data: {
              text: '',
              question: options.question,
              approach: options.approach,
              overrides: {
                indexType: options.overrides?.indexType,
                indexes: options.overrides?.indexes,
                semantic_ranker: options.overrides?.semanticRanker,
                semantic_captions: options.overrides?.semanticCaptions,
                top: options.overrides?.top,
                temperature: options.overrides?.temperature,
                prompt_template: options.overrides?.promptTemplate,
                prompt_template_prefix: options.overrides?.promptTemplatePrefix,
                prompt_template_suffix: options.overrides?.promptTemplateSuffix,
                exclude_category: options.overrides?.excludeCategory,
                chainType: options.overrides?.chainType,
                tokenLength: options.overrides?.tokenLength,
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
    throw Error("Unknown error");
  }
  return parsedResponse.values[0].data;

}
