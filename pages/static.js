import { readFileSync } from 'fs';

export default function Static(props) {
  return (
    <>
      <p>This is a static page:</p>
      <code>
        {props.contents}
      </code>
    </>
  )
}

export function getStaticProps() {
  const contents = readFileSync("text.txt", "utf-8");

  console.log("REVALIDATING..................");

  return {
    props: {
      contents
    },
    revalidate: 3
  }
}