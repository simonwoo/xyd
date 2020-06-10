import React from 'react';
import { IRouteComponentProps } from 'umi'

const Layout: React.SFC<IRouteComponentProps> = props => {
    return (
        <div>{ props.children }</div>
    )
}

export default Layout;