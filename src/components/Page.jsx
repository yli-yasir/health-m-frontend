import React from 'react';
import AppBar from './AppBar';
;
function Page(props){
return (<React.Fragment>
    <AppBar/>
    {props.children}
</React.Fragment>);    
}

export default Page;