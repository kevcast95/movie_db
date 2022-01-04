import React from 'react'

export default function Icons({ name, stroke, width, fill, className, selected, height, color }) {
  let colorFill = fill
  if (selected) {
    colorFill = selected
  }

  let icons = {
    LogOut: <svg xmlns="http://www.w3.org/2000/svg" className={className} fill={colorFill}   stroke={stroke} width="30" height="30" viewBox="0 0 24 24"><path d="M8 9v-4l8 7-8 7v-4h-8v-6h8zm2-7v2h12v16h-12v2h14v-20h-14z"/></svg>,
    Favorite: <svg xmlns="http://www.w3.org/2000/svg" className={className} fill={colorFill} stroke={stroke}  width="30" height="30" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>,
    Home:<svg fill="#000000" xmlns="http://www.w3.org/2000/svg" className={className}  viewBox="0 0 24 24" fill={colorFill} stroke={stroke}  width="30px" height="30px">    <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 14 L 14 14 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z"/></svg>,
  }


  if (icons[name] === undefined) {
    return null
  }

  return icons[name]
}
