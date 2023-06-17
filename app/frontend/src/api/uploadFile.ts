
export async function uploadFile(fileName: string, fileContent: any, contentType: string): Promise<string> {

  const response = await fetch('/uploadFile', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      fileName: fileName,
      fileContent: fileContent,
      contentType: contentType
    })
  });

  const result = await response.json();
  if (response.status > 299 || !response.ok) {
    return "Error";
  }
  return "Success";
}
