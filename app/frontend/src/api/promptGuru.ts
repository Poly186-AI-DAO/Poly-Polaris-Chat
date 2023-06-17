import { AskResponse, ChatResponse } from "./models";


export async function promptGuru(task: string, modelName: string, embeddingModelType: string): Promise<AskResponse> {
  const response = await fetch('/promptGuru', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      task: task,
      modelName: modelName,
      embeddingModelType: embeddingModelType,
      postBody: {
        values: [
          {
            recordId: 0,
            data: {
              text: '',
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
