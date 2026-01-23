// src/pages/cow.json.ts
import { client } from "../lib/microcms"; // microcms.tsのパスに合わせて調整してください

export async function GET() {
  try {
    // cow APIからすべての記事を取得
    // getAllContentsは全件取得してくれる便利なメソッドです
    const data = await client.getAllContents({
      endpoint: "store",
    });

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}