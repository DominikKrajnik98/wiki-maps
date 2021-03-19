import React from 'react'
import { Layout as AntLayout } from 'antd'
import styled from 'styled-components'

const { Header, Content, Footer : AntComponent } = AntLayout

const Logo = styled.h2`
    color: #fff;
`

const Inner = styled(Content)`
    min-height: 280px;
    padding: 24px;
    background: #fff;
`

const Layout = styled(AntLayout)`
    min-height:100vh;
`

const Footer = styled(AntComponent)`
    text-align: center;
`

export default function Page() {
  return (
    <Layout>
      <Header>
          <Logo>
              Wikipedia Map
          </Logo>
      </Header>
      <Inner>

      </Inner>
      <Footer>My side project</Footer>
    </Layout>
  )
}