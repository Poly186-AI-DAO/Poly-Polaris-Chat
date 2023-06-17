import { ChatResponse } from "./models";


export async function convertCode(inputLanguage: string, outputLanguage: string,
  inputCode: string, modelName: string, embeddingModelType: string): Promise<string> {
  const response = await fetch('/convertCode', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      inputLanguage: inputLanguage,
      outputLanguage: outputLanguage,
      modelName: modelName,
      embeddingModelType: embeddingModelType,
      postBody: {
        values: [
          {
            recordId: 0,
            data: {
              text: inputCode
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
  return parsedResponse.values[0].data.answer;
}
