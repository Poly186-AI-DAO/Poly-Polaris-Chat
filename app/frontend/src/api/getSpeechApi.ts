
export async function getSpeechApi(text: string): Promise<string | null> {
  return await fetch("/speech", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: text
    })
  }).then((response) => {
    if (response.status == 200) {
      return response.blob();
    } else {
      console.error("Unable to get speech synthesis.");
      return null;
    }
  }).then((blob) => blob ? URL.createObjectURL(blob) : null);
}
