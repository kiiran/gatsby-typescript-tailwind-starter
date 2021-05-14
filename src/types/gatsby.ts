import React from 'react'
import { PageProps } from 'gatsby'

export type GatsbyPage<
  TData = Record<string, unknown>,
  TPageContext = Record<string, unknown>
> = React.FC<PageProps<TData, TPageContext>>
