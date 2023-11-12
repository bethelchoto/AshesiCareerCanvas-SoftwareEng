// Copyrights.js

import React from 'react';

const Copyrights = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyrights">
      <p>&copy; {currentYear} Your Company Name. All Rights Reserved.</p>
    </div>
  );
};

export default Copyrights;



// import React from 'react';
// import { MDBFooter } from 'mdb-react-ui-kit';

// const copyrights=()=>{
//   return (
//     <MDBFooter bgColor='light' className='text-center text-lg-left'>
//       <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         &copy; {new Date().getFullYear()} Copyright:{' '}
//         <a className='text-dark' href='https://mdbootstrap.com/'>
//           MDBootstrap.com
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }

// export default copyrights;
