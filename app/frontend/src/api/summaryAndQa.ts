
export async function summaryAndQa(indexType: string, indexNs: string, embeddingModelType: string, requestType: string,
  chainType: string): Promise<string> {
  const response = await fetch('/summaryAndQa', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      indexType: indexType,
      indexNs: indexNs,
      embeddingModelType: embeddingModelType,
      requestType: requestType,
      chainType: chainType,
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

  const parsedResponse: any = await response.json();
  if (response.status > 299 || !response.ok) {
    throw Error("Unknown error");
  }
  if (requestType === 'summary') {
    return parsedResponse.values[0].summary;
  }
  else if (requestType === 'qa') {
    return parsedResponse.values[0].qa;
  }

  else
    return '';
}
