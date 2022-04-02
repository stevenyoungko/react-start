import React from 'react'

export const Friend = (props) => {
  return (
    <div>
      <h1>{ props.name }</h1>
      <h2>{ props.age }</h2>
      <p>
        { props.desc }
      </p>
    </div>
  )
}

// 也可以
// export const Friend = ({ name, age, desc}) => {
//   return (
//     <div>
//       <h1>{ name }</h1>
//       <h2>{ age }</h2>
//       <p>
//         { desc }
//       </p>
//     </div>
//   )
// }

export default Friend