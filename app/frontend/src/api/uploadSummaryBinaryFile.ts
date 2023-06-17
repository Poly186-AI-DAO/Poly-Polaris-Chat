
export async function uploadSummaryBinaryFile(formData: any): Promise<string> {
  const response = await fetch('/uploadSummaryBinaryFile', {
    method: "POST",
    body: formData
  });

  const result = await response.json();
  if (response.status > 299 || !response.ok) {
    return "Error";
  }
  return "Success";
}
