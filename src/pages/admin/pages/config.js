import React from 'react'
import AffConf from '../components/aff_cog'

export default function Conf() {
  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light"></span> Configurations</h4>
        <AffConf />
      </div>
    </div>
  )
}
