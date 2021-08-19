import React from 'react';
import ContentLoader from "react-content-loader";
import { Card } from 'semantic-ui-react';

const StatsSkelton = (props) => {
    return (
        <div>
            <Card>
                <Card.Content>
                    <ContentLoader
                        height={45}
                        width={190}
                        primaryColor="#d9d9d9"
                        secondaryColor="#ecebeb"
                        {...props} >
                         <rect x="70" y="12" rx="3" ry="3" width="100" height="7" />
                        <circle cx="30" cy="22" r="22" />
                        <rect x="70" y="24" rx="3" ry="3" width="100" height="10" />
                    </ContentLoader>
                </Card.Content>
            </Card>

        </div>
    );
};
export default StatsSkelton;
