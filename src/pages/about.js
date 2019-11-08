import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalLink from "../components/externalLink"
import Emoji from "../components/emoji"

const h2 = {
  fontSize: "2rem",
}
const sectionContent = {
  marginBottom: "3rem",
}

export const query = graphql`
  query {
    allContributor {
      edges {
        node {
          login
          html_url
        }
      }
    }
  }
`

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About Us" />
    <section>
      <div className="container" css={{ paddingBottom: "8rem" }}>
        <h1>About Politician Directory</h1>

        <h2 css={h2}>เกี่ยวกับสมุดพกการเมือง</h2>
        <p css={sectionContent}>
          สมุดพกการเมืองติดตามข้อมูลของนักการเมืองในประเทศไทย ตั้งแต่ พ.ศ.​ 2562
        </p>

        <h2 css={h2}>ที่มาของข้อมูล</h2>
        <p css={sectionContent}>ข้อมูลที่ใช้มาจากไหน</p>

        <h2 css={h2}>นโยบายการนำไปใช้ต่อ</h2>
        <p css={sectionContent}>
          ข้อมูลทั้งหมดเป็นการนับคะแนน 'อย่างไม่เป็นทางการ' ซึ่ง
          กกต.จะต้องตรวจสอบอีกครั้ง ก่อนประกาศรับรองผลภายหลังทีละเขต จนครบ 350
          เขต ซึ่งเป็นไปได้ว่าบางเขตอาจต้องเลือกตั้งใหม่ ทำให้จำนวน ส.ส.
          ของแต่ละพรรคสามารถเปลี่ยนแปลงได้
        </p>

        <h2 css={h2}>อาสาสมัครที่ร่วมพัฒนา</h2>

        <div css={sectionContent}>
          <div>
            <strong>
              เขียนโปรแกรม <Emoji symbol="💻" label="computer"></Emoji>
            </strong>
          </div>
          <div>
            {data.allContributor.edges.map(({ node }, i) => (
              <span key={node.login}>
                {i === 0 ? "" : " "}
                <ExternalLink href={node.html_url}>{node.login}</ExternalLink>
              </span>
            ))}
          </div>

          <div>
            <strong>
              ออกแบบ <Emoji symbol="🎨" label="palette"></Emoji>
            </strong>
          </div>
          <div>
            <ExternalLink href="https://www.instagram.com/messymachine/">
              @messymachine
            </ExternalLink>{" "}
            <ExternalLink href="https://www.instagram.com/namsaisupavong/">
              @namsaisupavong
            </ExternalLink>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage
