// import React from 'react'
// import { Route, Navigate, Outlet } from 'react-router-dom'
// import { useAuth } from './contexts/AuthContext'

// export default function PrivateRoute({component: Component, ...rest}) {
//     const { currentUser } = useAuth()
//     const auth = null
//   return (
//     <Route
//         {...rest}
//         render={props => {
//             return currentUser ? <Component {...props} /> : <Navigate to="/login" />
//         }}
//     ></Route>

//     // return (auth ? <Outlet /> : <Navigate to="/login" />
//   )
// }

import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'

export default function PrivateRoute() {
    const { currentUser } = useAuth()
    console.log("SOM TU KONECNE")
  return (
    <>    
        {currentUser ? <Outlet /> : <Navigate to="/login" />}
    </>
  )
}
