
export async function textAnalytics(documentText: string): Promise<string> {
  const response = await fetch('/textAnalytics', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      documentText: documentText
    })
  });

  const parsedResponse: any = await response.json();
  if (response.status > 299 || !response.ok) {
    throw Error("Unknown error");
  }
  return parsedResponse.TextAnalytics;
}
