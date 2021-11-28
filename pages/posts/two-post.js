import { Fragment } from "react";
import Link from 'next/link';

export default function TwoPost() {
    return (
        <Fragment>
            <h1>Tow Post</h1> 

            Read{' '}
            <Link href="/posts/first-post">
                <a>this page!</a>
            </Link>
        </Fragment>
    )
}
