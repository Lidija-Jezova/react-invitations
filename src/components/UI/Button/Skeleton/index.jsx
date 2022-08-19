import React from 'react'
import ContentLoader from "react-content-loader"

function Skeleton() {
  return (
	<ContentLoader
	speed={2}
	width={300}
	height={44}
	viewBox="0 0 300 44"
	backgroundColor="#f3f3f3"
	foregroundColor="#ecebeb">
	< rect x="52" y="8" rx="3" ry="3" width="200" height="10" />
	<rect x="52" y="26" rx="3" ry="3" width="180" height="8" />
	<rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
	<rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
	<rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
	<circle cx="21" cy="20" r="20" />
	<rect x="278" y="13" rx="0" ry="0" width="18" height="18" />
</ContentLoader >
  )
}

export default Skeleton