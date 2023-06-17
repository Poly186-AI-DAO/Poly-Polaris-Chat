import { AskRequest, AskResponse, ChatResponse } from "./models";


export async function smartAgent(options: AskRequest): Promise<AskResponse> {
  const response = await fetch('/smartAgent', {
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
                top: options.overrides?.top,
                temperature: options.overrides?.temperature,
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
