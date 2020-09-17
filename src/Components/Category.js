import React from "react";


function Category(props) {
    console.log(props)
    const items = props.items
    return(
        <div style={{display:'flex', justifyContent: 'center', margin: '5px'}}>
            <span style={{margin:'5px'}} onClick={()=> props.onSelectAll("1") }>Все</span>
            {items?.map((item)=> {
                return (
                <div onClick={()=> props.onSelectItem(item.id) } style={{margin:'5px'}} key={item.id}>{item.title} </div>
                )
            })}
        </div>
    )
}
export default Category;
