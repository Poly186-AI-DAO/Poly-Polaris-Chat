import { AskRequest } from "./models";


export async function summarizer(options: AskRequest, requestText: string, promptType: string, promptName: string, docType: string,
  chainType: string, embeddingModelType: string): Promise<string> {
  const response = await fetch('/summarizer', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      docType: docType,
      chainType: chainType,
      promptType: promptType,
      promptName: promptName,
      postBody: {
        values: [
          {
            recordId: 0,
            data: {
              text: requestText,
              overrides: {
                temperature: options.overrides?.temperature,
                tokenLength: options.overrides?.tokenLength,
                embeddingModelType: embeddingModelType,
              }
            }
          }
        ]
      }
    })
  });

  const parsedResponse: any = await response.json();
  if (response.status > 299 || !response.ok) {
    throw Error("Unknown error");
  }
  return parsedResponse.values[0].data.text;
}
