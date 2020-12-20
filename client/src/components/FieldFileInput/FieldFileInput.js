import React from 'react'

export default function FieldFileInput(
  {
    input,
    label,
    type,
    meta: { asyncValidating, touched, error, warning },
    ...rest
  }) {

  return (
    <div>
      <div>
        <input
          type='file'
          accept='.jpg, .png, .jpeg'
          {...input}
          {...rest}
        />
      </div>
    </div>
  )

}