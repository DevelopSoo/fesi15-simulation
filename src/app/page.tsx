// src/app/page.tsx

"use client";

import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function PostDetailPage() {
  const [data, setData] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/posts/1");

      if (!response.ok) {
        throw new Error("게시글 상세 데이터를 불러오지 못했습니다.");
      }

      const post = await response.json();
      setData(post);
    };

    fetchData();
  }, []);

  return (
    <main>
      <h1>게시글 상세</h1>

      {data && (
        <article>
          <h2>
            {data.id}: {data.title}
          </h2>
          <p>{data.body}</p>
        </article>
      )}
    </main>
  );
}
