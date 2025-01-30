/* eslint-disable @next/next/no-img-element */
'use client'

import dynamic from 'next/dynamic'

const TldrawWrapper = dynamic(
	() => import('@/components/TldrawWrapper').then((mod) => mod.TldrawWrapper),
	{ ssr: false }
)

export default function Home() {
	return <TldrawWrapper />
}
