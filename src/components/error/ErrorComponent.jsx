import React from 'react';

function ErrorComponent() {

  return (
    <div style={{ width : "100%", height : 500, display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}}>
        <h2>oops! something went wrong!</h2>
        <p>404 not found!</p>
    </div>
  )
}

export default ErrorComponent;