import NextLink from 'next/link';
import React from "react";

const Link = ({ to, children, className }) => {
	return (
		<NextLink href={ to }>
			<a className={ className }>{ children }</a>
		</NextLink>
	)
}

export default Link;
