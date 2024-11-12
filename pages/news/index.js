import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">Something Else</Link>
        </li>
        <li>
          <Link href="">NextJs is A Great Framework</Link>
        </li>
      </ul>
    </Fragment>
  );
}
export default NewsPage;
