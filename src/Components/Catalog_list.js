import React from "react";


function Catalog_list(props) {
    console.log(props)
    const items = props.items
    return(
        <div style={{display:'flex', justifyContent: 'center', margin: '5px'}}>
            {items?.map((item)=> {
                return (
                <div onClick={()=> props.onSelectItem(item.id) } style={{margin:'5px'}} key={item.id}>{item.title} </div>
                )
            })}
        </div>
    )
}
export default Catalog_list;
