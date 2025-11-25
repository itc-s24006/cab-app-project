import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries, MicroCMSListContent } from "microcms-js-sdk";

export type Quiz = {
  question: string;
  c1: string;
  c2: string;
  c3: string;
  c4: string;
  c5: string;
  answerId: string;
  level: string;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is not defined");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is not defined");
}

export const microcmsClient = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// クイズ一覧を取得する関数
export const getQuizList = async (queries?: MicroCMSQueries) => {
  const listData = await microcmsClient.getList<Quiz>({
    endpoint: "question",
    queries,
  });
  return listData;
};
