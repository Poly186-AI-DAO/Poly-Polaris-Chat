import { ChatResponse } from "./models";


export async function processDoc(indexType: string, loadType: string, multiple: string, indexName: string, files: any,
  blobConnectionString: string, blobContainer: string, blobPrefix: string, blobName: string,
  s3Bucket: string, s3Key: string, s3AccessKey: string, s3SecretKey: string, s3Prefix: string,
  existingIndex: string, existingIndexNs: string, embeddingModelType: string,
  textSplitter: string): Promise<string> {
  const response = await fetch('/processDoc', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      indexType: indexType,
      multiple: multiple,
      loadType: loadType,
      indexName: indexName,
      existingIndex: existingIndex,
      existingIndexNs: existingIndexNs,
      embeddingModelType: embeddingModelType,
      textSplitter: textSplitter,
      postBody: {
        values: [
          {
            recordId: 0,
            data: {
              text: files,
              blobConnectionString: blobConnectionString,
              blobContainer: blobContainer,
              blobPrefix: blobPrefix,
              blobName: blobName,
              s3Bucket: s3Bucket,
              s3Key: s3Key,
              s3AccessKey: s3AccessKey,
              s3SecretKey: s3SecretKey,
              s3Prefix: s3Prefix
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
