import React from 'react'
import { Button, Icon, Stack } from '@mui/material'
import { categories } from '../Utils/constants'


function SideBar({selectedCategory, setSelectedCategory}) {
  return (
    <Stack direction="row" sx={{
        overflowY:'auto', height:{sx:'auto', md:'95%'}, flexDirection:{md:'column'}
    }}>
        {categories.map(({name, Icon})=>(
            <button
            className='category-btn'
            onClick={()=>setSelectedCategory(name)}
            style={{
                background:name === selectedCategory && '#FC1503', color:'white'
            }}
            key={name}>
                <span style={{color:name===selectedCategory ? 'white' : 'red', marginRight:'1em'}}>{<Icon/>}</span>
                <span style={{opacity:name===selectedCategory ? '1' : '0.8'}}>{name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default SideBar