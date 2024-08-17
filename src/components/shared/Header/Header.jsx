import React from 'react'

export default function Header() {
  return (
    <header className='flex justify-between items-center px-[5rem] py-[1rem]'>
        <h3>Logo</h3>
        <select className='outline-none border-[1px] border-gray-300 rounded-md px-4 py-1 cursor-pointer' name="languages" id="languages">
          <option value="bn">Bangladesh</option>
          <option value="hi">Hindi</option>
          <option value="en">English</option>
        </select>
    </header>
  )
}
