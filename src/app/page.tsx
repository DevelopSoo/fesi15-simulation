// src/app/page.tsx

'use client';

import { NodeError } from 'three/src/nodes/Nodes.js';

export default function Home() {
  return (
    <div>
      <button
        onClick={async () => {
          throw new NodeError('Node Error');
        }}
        className="rounded-md bg-blue-500 p-2 text-white"
      >
        discord로 알림보내기
      </button>
    </div>
  );
}
