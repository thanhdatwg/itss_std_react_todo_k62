/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/


import React, { useState } from 'react';
function TodoItem( { item } ) {
  
 var [checked , setChecked ] = React.useState(item.done)
 
 const changeValue = () => {
   setChecked(!checked)
 }
  
  return (
    <label className="panel-block">
      <input type="checkbox" onChange={changeValue}  />
      { !checked ? <span>{item.text}</span> : <span className="has-text-grey-light">{item.text}</span>}
    </label>
  );
}

export default TodoItem;