import { CircularProgress } from '@material-ui/core';
import {useAsync} from 'react-use';
import React from 'react';

export default function Loader(props){
        
        const {load, deps, ...otherProps} = props;

        const {error, loading,value } = useAsync(load, deps);

        return (
            <React.Fragment>
            {loading && <CircularProgress/>}
            {!loading && !error && props.render(value)}
            {error && <div>error</div>}
            </React.Fragment>
            
        );



}