import { AskRequest, AskResponse, ChatResponse } from "./models";


export async function askApi(options: AskRequest, indexNs: string, indexType: string, chainType: string): Promise<AskResponse> {
  const response = await fetch('/ask', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      question: options.question,
      chainType: chainType,
      indexType: indexType,
      indexNs: indexNs,
      postBody: {
        values: [
          {
            recordId: 0,
            data: {
              text: '',
              approach: options.approach,
              overrides: {
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
