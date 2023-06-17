import { AskResponse, ChatResponse } from "./models";


export async function processSummary(loadType: string, multiple: string, files: any,
  embeddingModelType: string, chainType: string): Promise<AskResponse> {
  const response = await fetch('/processSummary', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      multiple: multiple,
      loadType: loadType,
      embeddingModelType: embeddingModelType,
      chainType: chainType,
      postBody: {
        values: [
          {
            recordId: 0,
            data: {
              text: files,
            }
          }
        ]
      }
    })
  });
  const parsedResponse: ChatResponse = await response.json();
  return parsedResponse.values[0].data;
  // if (response.status > 299 || !response.ok) {
  //     return "Error";
  // } else {
  //   if (parsedResponse.values[0].data.error) {
  //     return parsedResponse.values[0].data.error;
  //   }
  //   return parsedResponse.values[0].data.answer;
  // }
}
