import Link from 'next/link';

export default function Home() {
  return (
    <Link href="/board/1">
      <a>
        <h2>Board 1</h2>
      </a>
    </Link>
  );
}
