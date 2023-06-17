import { ChatResponse } from "./models";


export async function indexManagement(indexType: string, indexName: string, blobName: string, indexNs: string,
  operation: string): Promise<string> {
  const response = await fetch('/indexManagement', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      indexType: indexType,
      blobName: blobName,
      indexNs: indexNs,
      indexName: indexName,
      operation: operation,
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
    return "Error";
  } else {
    if (parsedResponse.values[0].data.error) {
      return parsedResponse.values[0].data.error;
    }
    return 'Success';
  }
  // if (response.status > 299 || !response.ok) {
  //   return "Error";
  // }
  // return "Success";
}
