import { AskResponse } from "./models";


export async function chatJsApi(question: string, history: never[], indexNs: string, indexType: string): Promise<AskResponse> {
  const response = {
    answer: "Success",
    thoughts: "No Thoughts",
    data_points: [],
    error: ""
  };
  return response;

  // const pineconeClient = new PineconeClient();
  // await pineconeClient.init({
  //   environment: process.env.VITE_PINECONE_ENV || '',
  //   apiKey: process.env.VITE_PINECONE_KEY || '',
  // });
  // const pineconeIndex = pineconeClient.Index(process.env.VITE_PINECONE_INDEX || 'oaiembed') 
  // const vectorStore = await PineconeStore.fromExistingIndex(new OpenAIEmbeddings({openAIApiKey:process.env.VITE_OPENAI_KEY}), 
  //   {pineconeIndex,namespace:indexNs})
  // const model = new OpenAI({openAIApiKey:process.env.VITE_OPENAI_KEY});
  // const chain = ChatVectorDBQAChain.fromLLM(model, vectorStore);
  // const answer = await chain.call({
  //     question: question,
  //     chat_history: history
  // })
  // const chatHistory = question + answer["text"];
  // const followUpRes = await chain.call({
  //   question: question,
  //   chat_history: chatHistory,
  // });
  // return followUpRes["text"]
}
