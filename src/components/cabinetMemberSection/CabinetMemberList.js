import React from "react"

import { CabinetMember } from "./CabinetMember"
import { sortThaiLocale } from "../../utils"

export const CabinetMemberList = ({ members, title }) => {
  let list = [...members]
  list.sort(sortThaiLocale)
  list = list.map(member => {
    // keep only 'cabinet_position' of the current section title
    const position = member.cabinet_position
      .filter(pos => pos.indexOf(title) >= 0)
      .join(", ")
    return (
      <CabinetMember {...member} cabinet_position={position} key={member.id} />
    )
  })

  return (
    <div
      css={{
        marginBottom: "6rem",
      }}
    >
      <h2
        css={{
          textAlign: "center",
          fontSize: "3.6rem",
          margin: "3rem",
        }}
      >
        {title}
      </h2>
      <div
        css={{
          width: "100rem",
          [`@media only screen and (max-width: 65rem)`]: {
            width: "50rem",
          },
          display: "flex",
          flexWrap: "wrap",
          margin: "0 auto",
          justifyContent: "center",
        }}
      >
        {list}
      </div>
    </div>
  )
}