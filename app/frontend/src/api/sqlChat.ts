import { ChatResponse, SqlResponse } from "./models";


export async function sqlChat(question: string, top: number, embeddingModelType: string): Promise<SqlResponse> {
  const response = await fetch('/sqlChat', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      question: question,
      top: top,
      embeddingModelType: embeddingModelType,
      postBody: {
        values: [
          {
            recordId: 0,
            data: {
              text: ''
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
