import React from 'react';
import useResources from './useResources';

const ResourceList = ({resource}) => {
    const resources = useResources(resource);
    return (
        <div>
            <div>
                {`Count = ${resources.length}`}
            </div>
            <div className="ui left aligned divided list">
            {
                resources.map(item=>(
                    <div className="item" key={item.id}>{item.title}</div>
                    )
                )
            }
            </div>
        </div>
    );
}

export default ResourceList;
