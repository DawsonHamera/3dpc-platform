import React from 'react';
import Card from '../../../../components/UI/Card/Card';

const DevWidget: React.FC = () => {
    return (
        <Card title="Dev Update" subtitle='For Development Purposes'>
           <p>Still working through the proccess.</p>
           <ul>
            <li>The request to print job workflow is functional, but the UI is still very buggy. </li>
                <li>Status management is partially implemented</li>
                <li>Main chat setup, but the proccess to add push notifications turned out to be very complex and will be postponed</li>
           </ul>
        </Card>
    );
};

export default DevWidget;