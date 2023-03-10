import React from "react";
import { RouteObject } from "../interface";
import { LayoutIndex } from "../constant";
import lazyLoad from "../utils/lazyLoad";

const planRouter : RouteObject = {
    element: <LayoutIndex />,
    children: [
        {
            path: "/plan",
            element: lazyLoad(React.lazy(() => import("../../views/plan"))),
            meta: {
                requiresAuth: true,
                title: "计划中",
                key: "plan"
            }
        }
    ]
};

export default planRouter;