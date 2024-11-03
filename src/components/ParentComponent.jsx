import React, { Suspense } from "react";
import HackerRoom from "./HackerRoom";

const ParentComponent = () => {
    return (
        <Suspense fallback={null}>
            <HackerRoom />
        </Suspense>
    );
};

export default ParentComponent;
