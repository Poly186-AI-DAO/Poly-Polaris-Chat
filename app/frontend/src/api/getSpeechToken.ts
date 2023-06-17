import { SpeechTokenResponse } from "./models";


export async function getSpeechToken(): Promise<SpeechTokenResponse> {
  const response = await fetch('/speechToken', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
  });

  const parsedResponse: SpeechTokenResponse = await response.json();
  if (response.status > 299 || !response.ok) {
    throw Error("Unknown error");
  }
  return parsedResponse;
}
