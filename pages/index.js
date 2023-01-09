import Link from 'next/link'
const Index = () => (
  <div>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
)
export default Index;
