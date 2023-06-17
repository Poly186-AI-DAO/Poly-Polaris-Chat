
export async function secSearch(indexType: string, indexName: string, question: string, top: string,
  embeddingModelType: string): Promise<any> {
  const response = await fetch('/secSearch', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      indexType: indexType,
      indexName: indexName,
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

  const result = await response.json();
  if (response.status > 299 || !response.ok) {
    return "Error";
  }
  return result;
}
