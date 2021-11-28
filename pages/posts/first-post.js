import Link from 'next/link';
import { Fragment } from 'react';

export default function FirstPost() {
    return (
        <Fragment>
             <h1>First Post</h1>

            <Link href="/posts/two-post">
                <a>click router two-post page</a>
            </Link>
        </Fragment>
    )
}
